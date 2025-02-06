export default function Assignment() {
  return (
    <div className="mt-10 space-y-4 ">
      <h2 className="text-center text-xl font-semibold">
        Assignment (F/HD/23/3210056)
      </h2>
      <div className="mx-auto w-full bg-white p-4 text-black shadow-md sm:max-w-screen-sm sm:rounded-md">
        <h3 className="font-bold">Machine Learning:</h3>
        <p>
          Machine learning is a subset of AI where computers learn from data to
          improve performance on tasks without being explicitly programmed.
        </p>
        <h3 className="mt-4 font-bold">Artificial Intelligence:</h3>
        <p>
          AI is the simulation of human intelligence by machines, enabling them
          to perform tasks that typically require human cognition.
        </p>
        <h3 className="mt-4 font-bold">Supervised Data/Model:</h3>
        <p>
          Supervised learning is a type of machine learning where the model is
          trained on labeled data to map input to the correct output.
        </p>
        <h3 className="mt-4 font-bold">Unsupervised Learning:</h3>
        <p>
          Unsupervised learning trains a model on data without labeled outputs,
          aiming to discover hidden patterns or structures.
        </p>
        <h3 className="mt-4 font-bold">Deep Learning:</h3>
        <p>
          Deep learning uses artificial neural networks with many layers to
          perform complex tasks like image recognition and natural language
          processing.
        </p>
      </div>

      <div className="mx-auto w-full space-y-2 bg-white p-4 text-black shadow-md sm:max-w-screen-sm sm:rounded-md">
        <h2>AI in Autonomous Vehicles</h2>

        <h3>Problem Creation</h3>
        <p>
          An AI-powered self-driving car struggles to accurately detect and
          respond to unpredictable pedestrian movements, posing serious safety
          risks.
        </p>

        <h3>Problem Identification</h3>
        <p>
          The AI system fails to consistently recognize pedestrians,
          particularly in low-light conditions or crowded environments,
          increasing the likelihood of accidents.
        </p>

        <h3>Problem Analysis</h3>
        <ul>
          <li>
            The AI has difficulty with real-time object detection in dynamic
            settings.
          </li>
          <li>
            The training dataset may lack sufficient diversity in pedestrian
            scenarios.
          </li>
          <li>
            Sensor limitations (e.g., cameras, LiDAR) reduce accuracy in adverse
            weather conditions.
          </li>
          <li>
            The decision-making model may not react swiftly enough to sudden
            pedestrian movements.
          </li>
        </ul>

        <h3>Problem Isolation & Solution</h3>
        <ul>
          <li>
            <strong>Enhanced Sensor Fusion</strong> – Integrate data from
            multiple sensors (cameras, LiDAR, radar) for improved accuracy.
          </li>
          <li>
            <strong>Advanced Machine Learning Models</strong> – Train deep
            learning models on a broader range of real-world pedestrian
            behaviors.
          </li>
          <li>
            <strong>Optimized Real-Time Processing</strong> – Improve AI
            responsiveness for quicker reaction times.
          </li>
          <li>
            <strong>Comprehensive Testing</strong> – Conduct extensive simulated
            and real-world trials in diverse environments to refine performance.
          </li>
        </ul>

        <h3>Summary</h3>
        <p>
          Autonomous vehicles depend on AI for safe navigation, yet pedestrian
          detection remains a critical challenge. Enhancing sensor technology,
          training AI with diverse datasets, and improving real-time processing
          can significantly reduce accidents and enhance overall reliability.
        </p>
      </div>
    </div>
  );
}
