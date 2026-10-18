
import { useEffect, useRef, useState } from "react";
import "./MLLifecycle.css";

const nodes = [
  { name: "DATA", x: 130, y: 130, icon: "▤" },
  { name: "PREPROCESS", x: 400, y: 130, icon: "⌗" },
  { name: "FEATURES", x: 670, y: 130, icon: "ƒ" },
  { name: "TRAIN", x: 670, y: 380, icon: "⚙" },
  { name: "EVALUATE", x: 400, y: 380, icon: "✓" },
  { name: "DEPLOY", x: 130, y: 380, icon: "↗" },
];

const steps = [
  {
    from: 0, to: 1,
    caption: "Collect and load raw data",
    accuracy: 0,
    points: [[167, 130], [363, 130]],
  },
  {
    from: 1, to: 2,
    caption: "Clean, impute, split train/test",
    accuracy: 0,
    points: [[437, 130], [633, 130]],
  },
  {
    from: 2, to: 3,
    caption: "Engineer features and encode",
    accuracy: 0,
    points: [[670, 170], [670, 340]],
  },
  {
    from: 3, to: 4,
    caption: "Fit the model (loss falls each epoch)",
    accuracy: 62,
    points: [[633, 380], [437, 380]],
  },
  {
    from: 4, to: 5,
    caption: "Validate: accuracy 0.94, F1 0.92",
    accuracy: 94,
    points: [[363, 380], [167, 380]],
  },
  {
    from: 5, to: 0,
    caption: "Monitor drift, collect new data, retrain",
    accuracy: 94,
    points: [[130, 340], [130, 170]],
    dashed: true,
  },
];

const FACE_POLYGONS = [
  "0,-40 37,-20 0,0 -37,-20",
  "-37,-20 0,0 0,40 -37,20",
  "37,-20 0,0 0,40 37,20",
];

function pointString(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function Cube({ node, active }) {
  return (
    <g className={`ml-node ${active ? "on" : ""}`}>
      <circle className="ml-glow" cx={node.x} cy={node.y} r="52" />

      <g transform={`translate(${node.x} ${node.y})`}>
        {FACE_POLYGONS.map((points, index) => (
          <polygon
            key={index}
            className="ml-cube-face"
            points={points}
          />
        ))}
      </g>

      <text
        className="ml-node-icon"
        x={node.x}
        y={node.y - 14}
        textAnchor="middle"
      >
        {node.icon}
      </text>

      <rect
        className="ml-label-box"
        x={node.x - 66}
        y={node.y + 58}
        width="132"
        height="30"
        rx="3"
      />

      <text
        className="ml-node-label"
        x={node.x}
        y={node.y + 77}
        textAnchor="middle"
      >
        {node.name}
      </text>
    </g>
  );
}

function MLLifecycle() {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const frameRef = useRef(null);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  const [stepIndex, setStepIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [destinationLit, setDestinationLit] = useState(false);
  const [dot, setDot] = useState({ x: 167, y: 130 });

  const currentStep = steps[stepIndex];

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRefs.current[stepIndex];

    if (!svg || !path) return;

    let animationFrame;
    let active = true;
    let previousTime = null;
    let elapsed = elapsedRef.current;
    const moveDuration = 1500;
    const waitDuration = 500;
    const totalDuration = moveDuration + waitDuration;

    function animate(timestamp) {
      if (!active) return;

      if (previousTime === null) previousTime = timestamp;
      const dt = Math.min(timestamp - previousTime, 100);
      previousTime = timestamp;

      if (!paused) {
        elapsed += dt;
        elapsedRef.current = elapsed;

        const pathLength = path.getTotalLength();

        if (elapsed <= moveDuration) {
          const progress = Math.min(elapsed / moveDuration, 1);
          const point = path.getPointAtLength(pathLength * progress);
          setDot({ x: point.x, y: point.y });
          setDestinationLit(false);
        } else {
          const endPoint = path.getPointAtLength(pathLength);
          setDot({ x: endPoint.x, y: endPoint.y });
          setDestinationLit(true);
        }

        if (elapsed >= totalDuration) {
          elapsedRef.current = 0;
          setStepIndex((current) => (current + 1) % steps.length);
          setDestinationLit(false);
          active = false;
          return;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      active = false;
      cancelAnimationFrame(animationFrame);
    };
  }, [stepIndex, paused]);

  function restart() {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    setStepIndex(0);
    setDestinationLit(false);
    setPaused(false);
    setDot({ x: 167, y: 130 });
  }

  const activeNodes = new Set(
    destinationLit
      ? [currentStep.from, currentStep.to]
      : [currentStep.from]
  );

  return (
    <section className="ml-section" id="ml-lifecycle">
      <div className="ml-header">
        <span>● ML MODEL LIFECYCLE</span>
        <span>FIG. 002</span>
      </div>

      <div className="ml-intro">
        <p className="ml-eyebrow">FROM DATA TO DEPLOYMENT</p>
        <h2>Inside the ML workflow</h2>
        <p>
          An interactive illustration of a typical machine learning
          pipeline, from raw data to deployment and retraining.
        </p>
      </div>

      <div className="ml-diagram">
        <svg
          ref={svgRef}
          viewBox="0 0 810 560"
          role="img"
          aria-label="Animated machine learning lifecycle with six stages:
          data, preprocessing, features, training, evaluation and deployment."
        >
          <defs>
            <filter id="ml-dot-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {steps.map((step, index) => (
            <polyline
              key={index}
              ref={(element) => {
                pathRefs.current[index] = element;
              }}
              className={`ml-connection ${
                stepIndex === index ? "on" : ""
              } ${step.dashed ? "dashed" : ""}`}
              points={pointString(step.points)}
              fill="none"
              aria-hidden="true"
            />
          ))}

          <text className="ml-loop-label" x="130" y="262" textAnchor="middle">
            RETRAIN LOOP
          </text>

          {nodes.map((node, index) => (
            <Cube
              key={node.name}
              node={node}
              active={activeNodes.has(index)}
            />
          ))}

          <circle
            className="ml-travel-dot"
            cx={dot.x}
            cy={dot.y}
            r="5"
            filter="url(#ml-dot-glow)"
          />
        </svg>
      </div>

      <div className="ml-trace">
        <div className="ml-trace-info">
          <p className="ml-trace-label">
            {String(stepIndex + 1).padStart(2, "0")} / PIPELINE TRACE
          </p>

          <p className="ml-caption" aria-live="polite">
            {currentStep.caption}
          </p>

          <div
            className="ml-progress-track"
            role="progressbar"
            aria-label="Illustrative model accuracy"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={currentStep.accuracy}
          >
            <div
              className="ml-progress-fill"
              style={{ width: `${currentStep.accuracy}%` }}
            />
          </div>

          <p className="ml-accuracy">
            ILLUSTRATIVE ACCURACY: {currentStep.accuracy}%
          </p>
        </div>

        <div className="ml-controls">
          <button
            type="button"
            aria-label={paused ? "Play animation" : "Pause animation"}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "▶" : "❚❚"}
          </button>

          <button
            type="button"
            aria-label="Restart animation"
            onClick={restart}
          >
            ↺
          </button>
        </div>
      </div>

      <p className="ml-footnote">
        CONCEPTUAL WORKFLOW · EXAMPLE METRICS, NOT LIVE MODEL RESULTS
      </p>
    </section>
  );
}

export default MLLifecycle;
