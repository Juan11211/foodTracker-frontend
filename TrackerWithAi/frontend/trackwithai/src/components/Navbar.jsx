const Navbar = () => {
  return (

    <div className="container max-w-full mt-2">
    <div className="flex justify-between">
      <h3 className="ml-2"><a href="/">FOODY CHAT</a></h3>
  
      <div className="flex justify-end space-x-4"> 
        <a href="/">HOME</a>
        <a href="/foodentry">Food Entry</a>
        <a href="/register">Register</a>
      </div>
    </div>
  </div>
  
   
  );
};

export default Navbar;
