import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, Button, CardTitle, CardText, Row, Col,Popover, PopoverHeader, PopoverBody
  } from 'reactstrap';
  import {img} from '../images/card.png'
  import { UncontrolledCarousel } from 'reactstrap';
  const items = [
    {
      src: require('../images/ca1.png'),
      
    },
    {
      src: require('../images/caro.jpg'),
      
    },
    {
      src: require('../images/cari.jpg'),
      
    },
    {
      src: require('../images/cara.jpg'),
      
    },
    {
      src: require('../images/caru.jpg'),
      
    },
    
    
    
    
    
  
  ]
class Index extends React.Component{
    state = {
      pull1 : false,
      pull2: false,
      pull3: false,
      pull4: false,
      over1: false,
      activeIndex: 0,
      animating: false
        
    }

    puller1 = (e) => {
      e.stopPropagation()
      this.setState({pull1:true})
    }

    pullerOff1 = (e) => {
      e.stopPropagation()
      this.setState({pull1: false})
    }
    puller2 = (e) => {
      e.stopPropagation()
      this.setState({pull2:true})
    }

    pullerOff2 = (e) => {
      e.stopPropagation()
      this.setState({pull2: false})
    }
    puller3 = (e) => {
      e.stopPropagation()
      this.setState({pull3:true})
    }

    pullerOff3 = (e) => {
      e.stopPropagation()
      this.setState({pull3: false})
    }
    puller4 = (e) => {
      e.stopPropagation()
      this.setState({pull4:true})
    }

    pullerOff4 = (e) => {
      e.stopPropagation()
      this.setState({pull4: false})
    }

  
  


    render(){
  

        return(
            <>
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
           
            <div className="heading">
            <div className="row">
            <div className="col-md-1">
            <img src={require('../images/logo.png')} alt="BANK LOGO" className="ml-5 my-2" width="90%" />
            </div>
            <div className="col-md-10 offset-1">
              <div className="row">
              <div className="col-md-2">
              <a href="#" style={{overflow: 'hidden'}}onMouseOver={this.puller1} onMouseOut={this.pullerOff1}><p className="pt-4 text as pl-4 pb-2 text-center">Banking<br/><p class="br sub">Accounts & Cards<br /></p></p></a>
              </div>
              <div className="col-md-2">
              <a href="#" onMouseOver={this.puller2} onMouseOut={this.pullerOff2}><p className=" pt-4 text as pl-4 pb-2 text-center">Borrowing<br/><p class="br sub">Loans & Mortages</p></p></a>
              </div>
              <div className="col-md-2">
              <a href="#" onMouseOver={this.puller3} onMouseOut={this.pullerOff3}><p className=" pt-4 text as pl-4 pb-2 text-center">Invesment<br/><p class="br sub">Individual & Corporate</p></p></a>
              </div>
              <div className="col-md-2">
              <a href="#" onMouseOver={this.puller4} onMouseOut={this.pullerOff4}><p className=" pt-4 text as pl-4 pb-2 text-center">Insurance<br/><p class="br sub">Individual & Family</p></p></a>
              </div>
              <div className="col-md-2">
              <a href="#" onMouseOver={this.puller5} onMouseOut={this.pullerOff5}><p className="mr-5 pt-4 text as pl-4 pb-2 text-center">Pension<br/><p class="br sub">Head Off
               & Cards</p></p></a>
              </div>
              </div>
            </div>
            </div>
            </div>
            {this.state.pull1 &&
              <div className="" style={{background: "lightgrey", color:'black', overflow: 'hidden'}} >
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <h4 class="title text-black">BANKING</h4>
                </div>
                <div className="col-md-6">
                <div class="pt-5">
                <div className="content1">
                
                <p className="pl-5">Account Opening</p>
                <p  className="pl-5">Savings Account</p>
                <p  className="pl-5">Fixed Deposit</p>
                <p  className="pl-5">Credit Go Cards</p>
                <p  className="pl-5">Internet Banking</p>
                <p  className="pl-5">Mobile Banking</p>
                  </div>
                
                </div>
                
                <br />
                <br />
                </div>
              </div>
               
            </div>
            }
             {this.state.pull2  && 
            <div className="" style={{background: "lightgrey", color:'black'}}>
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <h4 class="title text-black">BORROWING</h4>
                </div>
                <div className="col-md-6">
                <div class="pt-5">
                <div className="content1">
                <p className="font-weight-bold pl-5">Credit Go Africa</p>
                <p className="pl-5">Personal Loan</p>
                <p  className="pl-5">Bussiness Loan</p>
                <p  className="pl-5">Mortage Loan</p>
                <p  className="pl-5">Refinancing</p>
                <p  className="pl-5">Equity line of credit</p>
          
                  </div>
                
                </div>
                
                <br />
                <br />
                </div>
              </div>
               
            </div> 
            }
             {this.state.pull3 &&
           <div className="" style={{background: "lightgrey", color:'black'}}>
           <div className="row">
             <div className="col-md-6 d-flex justify-content-center align-items-center">
               <h4 class="title text-black">INVESTMENTS</h4>
             </div>
             <div className="col-md-6 text-black">
             <div class="pt-5">
             <div className="content1">
             <p className="font-weight-bold pl-5">Money Market Fund</p>
             <p className="pl-5">Equity Income Trust</p>
             <p  className="pl-5">Buying a House</p>
             <p  className="pl-5">Education Trust</p>
             <p  className="pl-5">Employee Investement Scheme</p>
             <p  className="pl-5">Customized Portfolio</p>
               </div>
             
             </div>
             
             <br />
             <br />
             </div>
           </div>
            
         </div>
            }
             {this.state.pull4 &&
           <div className="" style={{background: "lightgrey", color:'black'}}>
             <div className="container">
           <div className="row">
             <div className="col-md-3 pt-5 pb-5">
               <h4 className="font-weight-bold text-black">LIFE INSURANCE</h4>
               <p>Life Savings</p>
               <p>Instant Plan</p>
               <p>Education Plan</p>
               <p>Life Savings</p>
             </div>
             <div className="col-md-3 pt-5">
               <h4 className="font-weight-bold text-black">MOTOR INSURANCE</h4>
               <p>Auto Flex</p>
               <p>Auto Classic</p>
               <p>Auto Plus</p>
               <p>Auto Go</p>
             </div>
             <div className="col-md-3 pt-5">
               <h4 className="font-weight-bold text-black">TRAVEL INSURANCE</h4>
               <p>General (Bussiness/ Tourism</p>
               <p>Protection</p>
               <p>Student Protection</p>
               <p>Pilgrimage Protection</p>
             </div>
             <div className="col-md-3 pt-5">
               <h4 className="font-weight-bold text-black">OTHER INSURANCE</h4>
               <p>Fire & Engineering</p>
               <p>Aviation & Energy</p>
               <p>Others</p>
            
             </div>
             </div>
            
            
           </div>
            
         </div>
            }
               {this.state.pull5 &&
           <div className="" style={{background: "lightgrey", color:'black'}}>
             
           <div className="row">
             <div className="col-md-3 pt-5 pb-5">
               <h4 className="font-weight-bold text-black">PENSION</h4>
               <p>Public & Private Sector Pension</p>
               <p>Micro Pension</p>
              
             </div>
             
            
            
            
            
           </div>
            
         </div>
            }
            <div className="row">
            <div className="container">
            <div className="col-md-12 borderCovid">
              <UncontrolledCarousel items={items} />
              </div>
            </div>

            </div>
           
            <section className="pt-5 pb-4" style ={{background: 'white', color:'black'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 text-center">
                  <h4 className="font-weight-bold">CHECKING <i class="fa fa-chevron-right iconi" style={{backgroundColor:'017cc2'}}></i></h4>
                  <p className="text-justify">Find the Citirust Bank Holding checking account that's right for you</p>
                  </div>
                  <div className="col-md-3 text-center">
                  <h4 className="font-weight-bold">SAVINGS <i class="fa fa-chevron-right iconi" style={{color:'017cc2'}}></i></h4>
                  <p className="text-justify">Citirust Bank Holding savings accounts may help you reach your financial goals sooner</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h4 className="font-weight-bold">CREDIT CARD <i class="fa fa-chevron-right iconi" style={{color:'017cc2'}}></i></h4>
                    <p className="text-justify">New introductory offers plus unique benefits and rich rewards</p>
                  </div>
                  <div className="col-md-3 text-center">
                 <h4 className="font-weight-bold">MOBILE BANKING <i class="fa fa-chevron-right iconi" style={{color:'017cc2'}}></i></h4>
                 <p>Access your eligible accounts anytime</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-5 pb-5" style={{background: '#222', color:'white'}}>
              <div className="container">
                <h3 className="text-center text-white">Find And Buy Products</h3>
                
                <div className="row pt-3">
                  <div className="col-md-3 text-center">
                  <img src={require('../images/family.svg')} width="30%" />
                  <p className="font-weight-bold">LIFE</p>
                  <p>Find the Citirust Bank Holding checking account that's right for you</p>
                  </div>
                  <div className="col-md-3 text-center">
                  <img src={require('../images/elderly-man-white.svg')} width="30%" />
                 <p className="font-weight-bold">PENSION</p>
                 <p>Access your eligible accounts anytime</p>
                  </div>
                  <div className="col-md-3 text-center">
                  <img src={require('../images/car-white.svg')} width="30%" />
                  <p className="font-weight-bold">MOTOR</p>
                  <p>Citirust Bank Holding savings accounts may help you reach your financial goals sooner</p>
                  </div>
                  <div className="col-md-3 text-center">
                  <img src={require('../images/investment-white.svg')} width="30%" />
                    <p className="font-weight-bold">INVESTMENTS </p>
                    <p>New introductory offers plus unique benefits and rich rewards</p>
                  </div>
                  
                </div>
              </div>
            </section>
           
            
      
           
            <section className="pt-5 pb-3" style={{background:'whitesmoke'}}>
            <div className="container">
             <h1 className="font-weight-bold text-center">At your side, everyday. </h1>

             <div className="row pt-5">
               <div className="col-md-3">
                 <img src= {require('../images/1.jpg')} className="size w-100" />
                 <h4>Investment</h4>
                 <p class="text-justify">
                 We offer a variety of SEC approved investment products from our simple off-the-shelf mutual funds to specialized investment portfolios that cater to the different investment appetites of our individual and corporate clientele.
                 </p><br />
                 <Button style={{backgroundColor: "#0056ae"}} color={{color:"#0056ae"}}>READ MORE</Button>
               </div>
               <div className="col-md-3">
                 <img src= {require('../images/2.jpg')} className="size w-100" />
                 <h4>Protection</h4>
                 <p class="text-justify">
                 Our flagship insurance business provides insurance cover across life and savings to property and casualty for individuals and commercial solutions for SMEs and corporate organisations. Our insurance products ensure adequate protection to life, property and business.                 </p>
                 <Button style={{backgroundColor: "#0056ae"}} color={{color:"#0056ae"}}>READ MORE</Button>

               </div>
               <div className="col-md-3">
                 <img src= {require('../images/3.jpg')}  className="size w-100"/>
                 <h4>Pensions</h4>
                 <p class="text-justify">
                 
                Whether as a business owner, employer or employee, with our pension solutions you can envision a retirement where your financial needs are met by opening a Retirement Savings Account with us today.                 </p>
                <br />
                 <Button style={{backgroundColor: "#0056ae"}} color={{color:"#0056ae"}}>READ MORE</Button>


               </div>
               <div className="col-md-3">
                 <img src= {require('../images/img.jpg')} className="size w-100" />
                 <h4>More Profit</h4>
                 <p class="text-justify">
                 We offer a variety of SEC approved investment products from our simple off-the-shelf mutual funds to specialized investment portfolios that cater to the different investment appetites of our individual and corporate clientele.
                 </p><br />
                 <Button style={{backgroundColor: "#0056ae"}} color={{color:"#0056ae"}}>READ MORE</Button>

               </div>
             </div>
            </div>
            </section>
            <section style={{background: 'white'}}>
              <div className="container pt-5 pb-5">
                <div className="row">
                  <div className="col-md-6">
                    <img src={require('../images/credit card.jpg')} className="w-100" />
                  </div>
                  <div className="col-md-6">
                  <img src={require('../images/cre.jpg')} className="w-100" />
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
          


          
            
        

            </>
        )
    }
}
export default Index;