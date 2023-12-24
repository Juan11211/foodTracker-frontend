function register() {
    return (
      <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-200 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
        
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
       
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    )
  }
  
  export default register
  