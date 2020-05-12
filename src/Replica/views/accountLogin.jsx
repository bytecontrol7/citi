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
class AccountLogin extends React.Component{
  login = (e) => {
    e.preventDefault();
    this.props.history.push('/account')

  }
    render(){
        return(
            <>
            <div className="">
            <div className="sub-header pt-3 fixed-top">
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
            <div className="col-md-7 login_image">
            </div>
            <div className="col-md-5  pt-3 pb-5">
            <h4 className="text-center sub">Account Login</h4>
            <p className="text-center"> Lets login you in to your account</p>

            <hr  className="text-success" />
            <br />
            <br />
            <form className="col-md-10 offset-1">
                <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="text" name="username" className="form-control" />
                </div>
                <Button style={{background:'#e67817'}} className="btn btn-block" onClick={this.login}>SIGN IN</Button>

            </form>
         
           

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
export default AccountLogin