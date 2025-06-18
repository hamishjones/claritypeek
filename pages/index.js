    // pages/index.js
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">🔍 Welcome to ClarityPeek</h1>
      <p className="text-lg text-gray-700 mb-8">
        A lightweight, smart contract-focused block explorer for the Stacks blockchain.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href="/blocks"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Recent Blocks
        </a>
        <a
          href="/contract/example-contract"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Explore a Contract
        </a>
      </div>
    </main>
  );
}