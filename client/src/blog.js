import React  from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './metismenu.min.css';
import { faArrowLeft, faArrowRight, faBars, faCalendar, faComment, faCommentDots, faSearch, faTag } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF, faInstagram, faPinterest, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import './Blog.css';
import './default.css';
import './jquery.app';


import axios from 'axios';


const api = axios.create({
  baseURL : "http://localhost:5000/"
});

function Blog() {


  return (
    <html>
       
       <nav class="navbar navbar-expand-md  navbar-dark"  style={{zIndex:'2',backgroundColor:"#2A3891",width:""}} >
  <a class="navbar-brand" style={{color:"White",fontSize:"30px"}} href="#">ne<span style={{color:"red",fontSize:"30px"}}>a</span>r</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link " href="#"></a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link" href="#">Covid-19</a>
      </li>


      <li class="nav-item  dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Solution</a> 
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Publishers</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Marketers</b></span></a>
      </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Products</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Allspark<br /><b>AI-powered Audience Curation</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>CARBON<sup>TM</sup><br /><b>Real-World Data Enrichment</b></span></a>
      </div>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#">The Data</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Leadership</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Investors</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Board</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Resources</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Blog</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Newsroom</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Careers</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Privacy</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Contact Us</b></span></a>
      </div>
      </li>
    </ul>
  </div>  
</nav>
      <body>
      {/*<!-- Begin page -->*/}
         <div id="wrapper">
     {/*<!-- Top Bar Start -->*/}
        <div class="topbar-mobile">
            <div class="logo">
            
            <h2>Mesozi Blog</h2>
              
                  
             
            </div>
        </div>
        {/*<!-- Top Bar End -->*/}





        
        {/*<!-- ========== Left Sidebar Start ========== -->*/}
        <div class="left side-menu">

            <div class="slimscroll-menu" id="remove-scroll">

                <div class="logo">
               
                  <h2>Mesozi Blog</h2>
                </div>
        

        {/*<!--- Sidemenu -->*/}
                <div id="sidebar-menu">
                    {/*<!-- Left Menu Start -->*/}
                    <ul class="metismenu" id="side-menu">

                        <li>
                            <a href="#"><span> Home</span></a>
                        </li>

                       
                        <li>
                            <a href="#"><span> Lifestyle </span></a>
                        </li>

                        <li>
                            <a href="#"><span> Travel </span></a>
                        </li>

                        <li>
                            <a href="#"><span> Music </span></a>
                        </li>

                       

                    </ul>

                   

                </div>
               {/*<!-- Sidebar -->*/}
                <div class="clearfix"></div>

            </div>
            {/*<!-- Sidebar -left -->*/}

        </div>
       {/* <!-- Left Sidebar End -->*/}
        



        <div class="page-wrapper">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-title">
                                <div class="row">
                                    <div class="col-md-9 col-xs-12">
                                        <h2><span>News and Stories</span></h2>

                                        <p class="subtitle text-muted">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-5 pb-5">
                <div class="container">

                    <div class="row">
                       {/* <!-- Content-->*/}
                        <div class="col-xl-8">

                            {/*<!-- Post-->*/}
                            <article class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><a href="#">Beautiful Day With Friends In Paris</a></h2>
                                    <ul class="post-meta">
                                        <li><i><FontAwesomeIcon icon={faCalendar} /></i> July 03, 2019</li>
                                        <li><i><FontAwesomeIcon icon={faTag} /></i> <a href="#">Branding</a>, <a href="#">Design</a></li>
                                        <li><i><FontAwesomeIcon icon={faCommentDots} /></i> <a href="#">3 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <a href="#"><img src="download.png" alt="" class="img-fluid rounded"></img></a>
                                </div>
                                <div class="post-content">
                                    <p>Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.</p>
                                </div>

                                <div><a href="#" class="btn btn-outline-custom">Read More <i><FontAwesomeIcon icon={faArrowRight} /></i></a></div>

                                </article>
                               {/*<!-- Post end-->*/}

                             {/*  <!-- Post-->*/}
                            <article class="post">

                                <div class="post-header">
                                    <h2 class="post-title"><a href="#">Nature valley with cooling environment</a></h2>
                                    <ul class="post-meta">
                                        <li><i><FontAwesomeIcon icon={faCalendar} /></i> July 07, 2019</li>
                                        <li><i><FontAwesomeIcon icon={faTag} /></i> <a href="#">Branding</a>, <a href="#">Design</a></li>
                                        <li><i><FontAwesomeIcon icon={faCommentDots} /></i><a href="#"> 3 Comments</a></li>
                                    </ul>
                                </div>

                                <div class="post-preview">
                                    <a href="#"><img src="fall.png" alt="" class="img-fluid rounded"></img></a>
                                </div>

                                <div class="post-content">
                                    <p>Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.</p>
                                </div>

                                <div><a href="#" class="btn btn-outline-custom">Read More <i><FontAwesomeIcon icon={faArrowRight} /></i></a></div>

                            </article>
                          {/*  <!-- Post end-->*/}

                          {/*<!-- Pagination-->*/}
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="pagination">
                                        <li class="next"><a href="#"><i><FontAwesomeIcon icon={faArrowLeft} /></i></a></li>
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li class="prev"><a href="#"><i><FontAwesomeIcon icon={faArrowRight} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                           {/* <!-- Pagination end-->*/}
                        </div>
                      {/*  <!-- Content end--> */}

                                
                               {/* <!-- Sidebar--> */}
                        <div class="col-xl-4">
                            <div class="sidebar">

                               {/* <!-- Search widget-->*/}
                                <aside class="widget widget_search">
                                    <form>
                                        <input class="form-control pr-5" type="search" placeholder="Search..."></input>
                                        <button class="search-button" type="submit"><span><i><FontAwesomeIcon icon={faSearch} /></i></span></button>
                                    </form>
                                </aside>

                               

                                <aside class="widget about-widget">
                                    <div class="widget-title">Subscribe & Follow</div>

                                    <ul class="socials">
                                        <li><a href="http://facebook.com"><i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                                        <li><a href="http://twitter.com"><i><FontAwesomeIcon icon={faTwitter}/></i></a></li>
                                        <li><a href="http://instagram.com"><i><FontAwesomeIcon icon={faInstagram}/></i> </a></li>
                                        <li><a href="http://pinterest.com"><i><FontAwesomeIcon icon={faPinterest}/></i></a></li>
                                    </ul>

                                </aside>

                                {/*<!-- Categories widget-->*/}
                                <aside class="widget widget_categories">
                                    <div class="widget-title">Categories</div>
                                    <ul>
                                        <li><a href="#">Journey</a> (40)</li>
                                        <li><a href="#">Photography</a> (08)</li>
                                        <li><a href="#">Lifestyle</a> (11)</li>
                                        <li><a href="#">Food & Drinks</a> (21)</li>
                                    </ul>
                                </aside>

                               {/* <!-- Recent entries widget-->*/}
                                <aside class="widget widget_recent_entries_custom">
                                    <div class="widget-title">Popular Posts</div>
                                    <ul>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="download.png" alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">Beautiful Day With Friends..</a> <span class="post-date">Jun 15, 2019</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="fall.png" alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">Nature valley with cooling..</a> <span class="post-date">Jun 10, 2019</span></div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="wi">
                                                <a href="#"><img src="images.jpg" alt="" class="img-fluid"></img></a>
                                            </div>
                                            <div class="wb"><a href="#">15 Best Healthy and Easy Salad..</a> <span class="post-date">Jun 8, 2019</span></div>
                                        </li>
                                    </ul>
                                </aside>

                               {/* <!-- Text widget--> */}
                                <aside class="widget">
                                    <div class="widget-title">Text Widget</div>

                                    <p class="text-muted text-widget-des">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. </p>

                                </aside>

                               {/* <!-- Archives widget--> */}
                                <aside class="widget">
                                    <div class="widget-title">Archives</div>

                                    <ul>
                                        <li><a href="#">March 2019</a> (40)</li>
                                        <li><a href="#">April 2019</a> (08)</li>
                                        <li><a href="#">May 2019</a> (11)</li>
                                        <li><a href="#">Jun 2019</a> (21)</li>
                                    </ul>

                                </aside>

                                {/*<!-- Tags widget-->*/}
                                <aside class="widget widget_tag_cloud">
                                    <div class="widget-title">Tags</div>
                                    <div class="tagcloud">
                                        <a href="#">logo</a>
                                        <a href="#">business</a>
                                        <a href="#">corporate</a>
                                        <a href="#">e-commerce</a>
                                        <a href="#">agency</a>
                                        <a href="#">responsive</a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                       {/* <!-- Sidebar end-->*/}
                    </div>
                    </div>

                
                {/*<!-- end container -->*/}
                                
                                
                                
                                
                                
                                
                                
                                
                                </section>
            
            


</div>
</div>  
          
    
 </body>
 <footer id="footer" class="footer-v8">
        <div class="content-sm container">
            <div class="row">
              
                <div class="col-md-3 col-sm-6 md-margin-b-50">
                    <a href="index.html">
                        <img class="footer-v8-logo-img" src="https://mesozi.com/assets/img/mesozi-logo.png" alt=""></img>
                    </a>
                    <p class="margin-b-30">Mesozi is an leading provider of integrated business and technology solutions. We believe everyone deserves to Experience Clarity™</p>
                    <h3 class="footer-v8-title">Go Social</h3>
                   
                    <ul class="list-inline ul-li-lr-0">
                        <li class="theme-icons-wrap"><a href="https://www.facebook.com/mesozigroup/" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-facebook"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://twitter.com/mesozigroup" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-twitter"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://www.linkedin.com/company/mesozi-systems-inc/" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-linkedin"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://www.instagram.com/mesozigroup/?hl=en" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-instagram"></i></a></li>
                    </ul>
                  
                </div>
             
                <div class="col-md-4 col-sm-6 md-margin-b-50">
                    <h3 class="footer-v8-title">Lets Talk</h3>
                    <form class="contact-form comment-form-error">
                        <input type="text" class="form-control radius-3 margin-b-10"
                        name="name" placeholder="Full Name *" required></input>
                        <input type="email" class="form-control radius-3 margin-b-10"
                        name="email" placeholder="Email *" required></input>
                        <textarea class="form-control radius-3 margin-b-10" rows="5"
                        name="message" placeholder="Your message *" required>
                        </textarea>
                        <button type="submit" class="btn-dark-bg btn-base-sm radius-3 btn-block">
                            Submit
                        </button>
                    </form>
                </div>
                <br/>
                <br/>
              
                <div class="col-md-3 col-sm-6 sm-margin-b-50">
                    <h3 class="footer-v8-title">Contact Info</h3>
                    <div class="footer-v8-contact-info-bg">
                        <ul class="list-unstyled footer-v8-contact-info">
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-map-marker"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href="https://goo.gl/maps/nULsYRZcZkvA13dh6" target="blank">HQ - Nairobi, Kenya</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-phone"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href="tel:254714000384">+254 714 000 384</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-envelope-o"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href = "mailto:info@mesozi.com">info@mesozi.com</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-facebook"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://www.facebook.com/mesozigroup/" target="blank">Mesozi Group</a>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-linkedin"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://www.linkedin.com/company/mesozi-systems-inc/?originalSubdomain=ke" target="blank">Mesozi Group</a>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-twitter"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://twitter.com/mesozigroup" target="blank">@mesozigroup</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
         

                <div class="col-md-2 col-xs-6 xs-full-width md-margin-b-30">
                    <h3 class="footer-v8-title">Quick Links</h3>
                    <ul class="list-unstyled footer-news-list">
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="http://board.mesozi.com" target="_blank">Blog</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="https://mesozi.com/index.php/site/contact">Support</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">Terms & Conditions</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">Privacy Policy</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>

      
        <div class="footer-v8-copyright">
            <div class="container text-center">
                <p class="margin-b-0">
                    &#169; Mesozi Group 2021. All Rights Reserved.
                </p>
            </div>
        </div>
   
    </footer>
</html>
     )   
}

export default Blog;