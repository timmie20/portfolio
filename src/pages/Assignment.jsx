export default function Assignment() {
  return (
    <div className="mt-10 space-y-4 ">
      <h2 className="text-center text-xl font-semibold">Assignment</h2>
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
    </div>
  );
}
