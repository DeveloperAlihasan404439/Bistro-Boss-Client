import loginBanner from "../../assets/others/authentication.png";
import useAuth from "../../Sheard/Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublick from "../../Sheard/Hooks/useAxiosPublick";
const Signup = () => {
  const axiosPublick = useAxiosPublick()
  const { createUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const hendelSignup = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const photo = target.photo.value;
    const password = target.password.value;

    createUser(email, password).then((result) => {
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        const userInfo = {
          name,
          email,
        }
        axiosPublick.post('/users',userInfo)
        .then(res =>{
          if(res.data.insertedId){
            logout();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Success the sign up from",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location?.state ? location?.state : "/"); 
          }
        })
      });
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
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="w-11/12 mx-auto h-full flex justify-center items-center">
        <div className="card flex-shrink-0 w-full md:w-1/2 mx-auto mb-5 shadow-2xl ">
          <h1 className="text-3xl font-medium text-black text-center">
            Sign Up{" "}
          </h1>
          <form onSubmit={hendelSignup} className="card-body">
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="text-3xl font-normal text-black">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input  w-full border-none outline-none"
                  required
                />
              </div>
              <div className="form-control w-[50%]">
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-3xl font-normal text-black">Photo</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="photo"
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
                <button className="uppercase">Sign Up</button>
              </div>
            </div>
            <p>
              Already Have An Account ?{" "}
              <Link to="/login" className="text-orange-500">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
