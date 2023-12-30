import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="">
      <div className="bg-tan h-screen flex flex-col md:flex-row items-center">
        <div className="container text-center w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-4xl mb-4 mt-4 md:mt-0">Indulge in Culinary Delights</h3>
          <p className="text-lg">
            Unleash the Power of AI for Personalized Meal Recommendations <br />
            and Connect with a Vibrant Foodie Community!
          </p>
          <Link
            to="/register"
            className="inline-block border border-black my-5 p-3 text-lg hover:bg-gray-300 transition-all"
          >
            Register Here
          </Link>
        </div>

        <div className="container text-center md:w-1/2">
          <img
            className="shadow-lg rounded-md mx-auto" 
            src="https://i.pinimg.com/564x/bc/f8/7d/bcf87def3cefca3cead5355503cd60cd.jpg"
            alt="burger&fries"
          />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Landing;
