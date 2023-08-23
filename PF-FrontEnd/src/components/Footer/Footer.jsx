/* eslint-disable react/prop-types */
import React,{useState} from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { sendNewsletter } from "../../Redux/actions";
import {useDispatch} from 'react-redux'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubscribe = async () => {
    try {
      await dispatch(sendNewsletter(email));
      toast.success("Correo electrónico enviado exitosamente");
      setEmail("");
    } catch (error) { 
      toast.error("Error al enviar el correo electrónico");
    }
  };
  console.log("Email actual:", email);
  return (
    <div className="containerFooter">
      <footer className=" containerall ">
        <div className=" container-xxl">
          <div className="avers">
            <div className="col-5">
              <div className="footer-top-data">
                <i class="bi bi-rocket-takeoff"></i>
                <h2>Sign Up for Newsletter </h2>
              </div>
            </div>
            <div class="input-group mt-5">
              <input
                type="text"
                class="form-control  py-1 "
                placeholder="Your Email addres"
                aria-label="Your Email addres"
                aria-describedby="basic-addon2"
                value={email}
                onChange={handleEmailChange}
              />
              <button  class="input-group-text py-3" 
              id="basic-addon2"
              onClick={()=>handleSubscribe()}
              >
                subscribe
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="statuscon col-5"> 
              <h3>Contact Us</h3>
              <div className="FooterLinks d-flex flex-column">
                <address className="text-white py-2 mb-1">
                  Centro Comercial Miramar, Cra. 43 #99-50, Nte. Centro
                  Historico, Barranquilla, Atlántico
                </address>
                <a href="+57 324 470793" className="text-white py-2 mb-1">
                  +57 324 470793
                </a>
                <a href="hsolano267@gmail.com" className="text-white py-2 mb-1">
                  elgrupitodeatras@gmail.com
                </a>
                <div className="Socialicons ">
                  <div className="redes">
                    <a href="https://github.com/tu-usuario">
                      <i className="bi bi-github fs-4"></i>
                    </a>
                  </div>
                  <div className="redes">
                    <a href="https://www.linkedin.com/in/tu-usuario">
                      <i className="bi bi-linkedin fs-4"></i>
                    </a>
                  </div>{" "}
                  <div className="redes">
                    <a href="https://wa.me/tunumero">
                      <i className="bi bi-whatsapp fs-4"></i>
                    </a>
                  </div>
                  <div className="redes">
                    <a href="https://discord.com/tu-usuario">
                      <i className="bi bi-discord fs-4 "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h3 className="aver">Information</h3>
              <div className="FooterLinks  d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy policy</Link>
                <Link className="text-white py-2 mb-1">blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h3> Account</h3>
              <div className="FooterLinks d-flex flex-column">
                <Link className="text-white py-2 mb-1">about Us</Link>
                <Link className="text-white py-2 mb-1">repository</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h3>Quick Links</h3>
              <div className="FooterLinks d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                &copy;{new Date().getFullYear()}; Power By Tusnalgas{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
