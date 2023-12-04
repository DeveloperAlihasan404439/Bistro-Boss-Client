import useAuth from "../../Sheard/Hooks/useAuth";
import loginBanner from "../../assets/others/authentication.png";
import google from "../../assets/others/google.png";
import github from "../../assets/others/github.png";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublick from "../../Sheard/Hooks/useAxiosPublick";
const LogIn = () => {
  const { LoginUser, loginGoogle } = useAuth();
  const axiosPublick = useAxiosPublick()
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const hendelLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    LoginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Success the log in from",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const hendelGoogle = () => {
    loginGoogle(provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        }
        axiosPublick.post('/users', userInfo)
        .then(res =>{
          console.log(res.data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success google login",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state ? location?.state : "/");
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[100vh]"
    >
      <div className="w-11/12 mx-auto h-full flex justify-center items-center">
        <Helmet>
          <title>Bistro Boss | Log In</title>
        </Helmet>
        <div className="card flex-shrink-0 w-full md:w-1/2 mx-auto mb-5 shadow-2xl ">
          <h1 className="text-3xl font-medium text-black text-center">
            Log In{" "}
          </h1>
          <form onSubmit={hendelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-3xl font-normal text-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input  w-full border-none outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-3xl font-normal text-black">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input  w-full border-none outline-none "
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <div className="bg-gradient-to-r from-[#835D23] to-[#D1A054] flex justify-center items-center gap-5 py-2 px-5 text-2xl text-white font-normal w-fit rounded-lg">
                <button className="uppercase">Log In</button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5 w-full md:mt-6">
              <div
                onClick={hendelGoogle}
                className="md:w-[50%] bg-white py-1 flex justify-center rounded-lg"
              >
                <img src={google} alt="" className="w-[50px] h-[40px]" />
              </div>
              <div className="md:w-[50%] bg-white py-1 flex justify-center rounded-lg">
                <img
                  src={github}
                  alt=""
                  className="w-[50px] h-[40px] text-white"
                />
              </div>
            </div>
            <p>
              New Hear ?{" "}
              <Link to="/signup" className="text-orange-500">
                Create An Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
