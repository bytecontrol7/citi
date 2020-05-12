import React from 'react';
import '../styles/app.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, Button, CardTitle, CardText, Row, Col,Popover, PopoverHeader, PopoverBody
  } from 'reactstrap';
class Register extends React.Component{
    render(){
        return(
            <>
            <div className="">
            <div className="sub-header pt-3">
            <p className="pr-3">Personal</p>
            <p className="pr-3">|</p>
            <p className="pr-3"> Bussiness</p>
            <p className="pr-3">|</p>
            <p className="pr-3">Corporate</p>
            <div className="ml-auto sub-header_right d-flex justify-content align-items-center">
            <p className="pr-3">Follow us</p>
            <p className="pr-3"><i class="fa fa-youtube-play"></i></p>
            <p className="pr-3"><i class="fa fa-facebook"></i></p>
            <p className="pr-3"><i class="fa fa-twitter"></i></p>
            <p className="pr-3"><i class="fa fa-instagram"></i></p>
            <p className="pr-3"><i class="fa fa-linkedin"></i></p>
            <p className="pr-3"><a href="account-register">Register</a></p>
            <p className="pr-3"><a href="/account-login"><Button className="mb-0  mt-0" style={{background:'#017cc2'}}  color="info">Login <i className="fa fa-user-circle"></i></Button></a>
</p>
            </div>
            </div>
            <section>
            <div className="row">
            <div className="col-md-5 login_image">
            </div>
            <div className="col-md-7  pt-3 pb-5">
            <div className="container">
            <h4 className="text-center sub">Create an Account</h4>
            <hr  className="text-success" />
            <br />
           
            <p className="text-left"> We're so glad you're ready to join. This should only take a couple minutes. Let's start by creating your account login</p>
            <p className="font-weight-bold">Personal Info</p>
            
            <div className="row">
            <div className="col-md-6">
            <p className="font-weight-bold">Account Information</p>
            <form className="">
            <div className="form-group">
                <label>Email Address (this will also be your login)</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Create Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Confirm Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
               
                <div className="form-group">
                <label>Email Address (this will also be your login)</label>
                <input type="text" name="username" className="form-control" />
                </div>
            
            </form>
            
            </div>
            <div className="col-md-6">
            <p className="font-weight-bold">Personal Information</p>
            <form className="">
            <div className="form-group">
                <label>Firstname</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Lastname</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Phone Number</label>
                <input type="text" name="username" className="form-control" />
                </div>
               
                <div className="form-group">
                <label>Are you already our customer? </label>
                <select type="select" name="username" className="form-control">
                <option>YES</option>
                <option>NO</option>                
                </select>

                </div>
            
            </form>
            
            </div>
            </div>
               <div className="d-flex justify-content-end align-items-center">
               <button style={{background: '#e67817'}} className="btn btn-block">Register</button>
               </div>
               
               
    

     
            
            </div>
          
          
           

            </div>
            </div>
            </section>
            <section className="pt-5 pb-3" style={{background:'whitesmoke',color:'black'}}>
              <div className="container pt-4 pb-3">
                <div className="row">
                  <div className="col-md-3">
                    <h4 className="pro_title"><i className="fa fa-phone"></i> Contact Citirust</h4><br />
                    <p className="pt-2 pl-2 text-black">Write, call or send a message <i className="text-black fa fa-chevron-right"></i></p>
                  </div>
                  <div className="col-md-3 content2 ">
                    <h4 className="pro_title"><i className="fa fa-map-marker"></i> Find A Branch</h4><br />
                    <p className="pt-2 text-black">find your nearest branch location <i className="text-black fa fa-chevron-right"></i></p>
                  </div>
                  <div className="col-md-3 content2">
                    <h4 className="pro_title"><i className="fa fa-info-circle"></i> FAQ</h4><br />
                    <p className="pt-2 text-black">see FAQS on Personal Interest Banking <i className="text-white fa fa-chevron-right"></i></p>
                  </div>
                  <div className="col-md-3 content2">
                    <h4 className="pro_title"><i className="fa fa-globe"></i> About Citirust</h4><br />
                    <p className="pt-2 text-black">careers,media ivestor and corporate information <i className="text-white fa fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>
            </section>
            
            <footer className=" pt-3  pb-2 foot" style={{background: '#0056ae'}}>
          
              
          <div className="container">
          <div className="d-flex justify-content-start text-white align-items-center">
            <p className="pr-2">Privacy & Security</p>
            <p className="pr-2">Terms & Conditions</p>
            <p className="pr-2">Citirust & Accessibility</p><br />
            <p className="ml-auto">
            &copy; Citirust Holding PLC 2020. All Right Reserved
          </p>
            
          </div>
       

          </div>
        </footer>
            

            </div>
            </>
        )
    }
}
export default Register