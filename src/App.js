import logo from './logo.svg';
// import './App.css';
import './css/style.css';
import share from './images/share.png';
import checked from './images/checked.png';
import contact from './images/contacts.png';
import shopping from './images/shopping-bag.png';
import store from './images/app-store.jpg';
import playStore from './images/google-play.png';
// import video from './images/vector-video'
import video from './images/video.png';
function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="navbar">
					<div className="nav-links">
						<ul className="logo">
							<li>
								Pa<span>yy</span>ed
							</li>
						</ul>
						<ul className="links">
							<li>HOW IT WORKS</li>
							<li>ABOUT US</li>
							<li>FEES</li>
							<li>HELP</li>
						</ul>
					</div>
					<ul className="login-signup">
						<li>LOGIN</li>
						<li>
							<button className="sign-up">SIGN UP</button>
						</li>
					</ul>
				</div>
			</header>

			<div className="banner">
				<div className="banner-container">
					<h1 className="banner-heading">Send and Receive Money</h1>
					<div className="banner-description">
						Quickly and easily send, Receive and Request money online with
						Payyed.
					</div>
					<div className="banner-buttons">
						<button className="free-account-btn">Open a Free Account</button>
						<button className="how-it-works-btn">See How it Works</button>
					</div>
				</div>
			</div>

			<div className="why-choose-payyed">
				<div className="container">
					<h1>Why should you choose Payyed?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
						temporibus officiis nemo.
					</p>
					<div className="four-reasons">
						<div className="reason-box">
							<img src="" alt="" />
							<h2>Easy to use</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								explicabo sunt vel quibusdam placeat dolore.
							</p>
							<a href="#">learn more &gt;</a>
						</div>
						<div className="reason-box">
							<img src="" alt="" />
							<h2>Faster Payments</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								explicabo sunt vel quibusdam placeat dolore.
							</p>
							<a href="#">learn more &gt;</a>
						</div>
						<div className="reason-box">
							<img src="" alt="" />
							<h2>Lower Fees</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								explicabo sunt vel quibusdam placeat dolore.
							</p>
							<a href="#">learn more &gt;</a>
						</div>
						<div className="reason-box">
							<img src="" alt="" />
							<h2>100% secure</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								explicabo sunt vel quibusdam placeat dolore.
							</p>
							<a href="#">learn more &gt;</a>
						</div>
					</div>
				</div>
			</div>

			<div className="payment-solutions">
				<div className="container">
					<div className="payment-solution-description">
						<h1>Payment Solutions for anyone.</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
							quia iure fuga nesciunt odio saepe eius repellendus voluptatibus
							quasi reprehenderit commodi delectus autem ipsa, accusantium
							doloremque, voluptas adipisci ipsum quo quod.
						</p>
						<a href="#">Find more solution &gt;</a>
					</div>
					<div className="four-solutions">
						<div className="sol-image-box sol-box1">
							<div className="sol-name">Freelancer</div>
						</div>
						<div className="sol-image-box sol-box2">
							<div className="sol-name">Online Shopping</div>
						</div>
						<div className="sol-image-box sol-box3">
							<div className="sol-name">Online Sellers</div>
						</div>
						<div className="sol-image-box sol-box4">
							<div className="sol-name">Affiliate Marketing</div>
						</div>
					</div>
				</div>
			</div>

			<div className="do-with-payyed">
				<div className="container">
					<h1 className="do-with-heading">What can you do with Payyed?</h1>
					<p className="do-with-description">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
					</p>
					<div className="do-with-box-container">
						<div className="do-with-box">
							<img className="do-with-image" src={share} alt="" />
							<div className="do-with-heading">Send Money</div>
						</div>
						<div className="do-with-box">
							<img className="do-with-image" src={checked} alt="" />
							<div className="do-with-heading">Receive Money</div>
						</div>
						<div className="do-with-box">
							<img className="do-with-image" src={contact} alt="" />
							<div className="do-with-heading">Pay a Friend</div>
						</div>
						<div className="do-with-box">
							<img className="do-with-image" src={shopping} alt="" />
							<div className="do-with-heading">Online Shopping</div>
						</div>
					</div>
					<a href="#">See more can you do &gt;</a>
				</div>
			</div>

			<div className="how-it-works">
				<div className="container">
					<div className="working-video">
						<img src={video} alt="" />
					</div>
					<div className="working-description">
						<h1 className="working-heading">How does it work?</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							possimus libero quaerat ipsa reprehenderit quia accusamus ratione
							aperiam aut ut!
						</p>
						<ul className="working-points">
							<li>Signup Account</li>
							<li>Lorem ipsum dolor sit.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						</ul>
						<button className="free-account">Open a free Account</button>
					</div>
				</div>
			</div>

			<div className="what-people-say">
				<div className="people-say-container">
					<h1 className="people-say-heading">
						What people are saying about Payyed
					</h1>
					<p>A payments experience people love to talk about</p>
					<div className="review-box-container">
						<div className="review-box">
							<div className="review-content">
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum fugiat odio repellat debitis doloribus. In harum
								blanditiis at fugiat ratione."
							</div>
							<div className="reviewer-name">Jay Shah</div>
							<div className="reviewer-position">
								Founder at Icomatic pvt ltd
							</div>
						</div>
						<div className="review-box">
							<div className="review-content">
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum fugiat odio repellat debitis doloribus. In harum
								blanditiis at fugiat ratione."
							</div>
							<div className="reviewer-name">Jay Shah</div>
							<div className="reviewer-position">
								Founder at Icomatic pvt ltd
							</div>
						</div>
					</div>
					<a href="#">See more people review &gt;</a>
				</div>
			</div>

			<div className="customer-support">
				<div className="customer-support-container">
					<h1 className="customer-support-heading">Awesome customer Support</h1>
					<p>
						Have you any query?Don't worry.we have great people ready to help
						you whenever you need it.
					</p>
					<button className="find-out-more">Find out more</button>
				</div>
			</div>

			<div className="get-app">
				<div className="get-app-container">
					<h1 className="get-app-heading">Get the app</h1>
					<p>
						download our app for the fastest most convenient way to send and get
						payment.
					</p>
					<div className="app-image">
						<img
							className="store"
							src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="footer-container">
					<div className="footer-top">
						<ul className="footer-links">
							<li>About us</li>
							<li>Support</li>
							<li>Help</li>
							<li>careers</li>
							<li>Affiliate</li>
							<li>Fees</li>
						</ul>
						<div className="social-media-links">
							<a
								href="https://www.freepnglogos.com/pics/facebook-logo"
								title="Image from freepnglogos.com"
							>
								<img
									src="https://www.freepnglogos.com/uploads/facebook-logo-13.png"
									width="200"
									alt="logo facebook download png"
								/>
							</a>
							<a
								href="https://www.freepnglogos.com/pics/logo-twitter-png"
								title="Image from freepnglogos.com"
							>
								<img
									src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
									width="200"
									alt="twitter logo vector png clipart"
								/>
							</a>
							<a
								href="https://www.freepnglogos.com/pics/logo-instagram-png"
								title="Image from freepnglogos.com"
							>
								<img
									src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-5.png"
									width="200"
									alt="instagram logos png images free download"
								/>
							</a>
							<a
								href="https://www.freepnglogos.com/pics/google-logo-history-png"
								title="Image from freepnglogos.com"
							>
								<img
									src="https://www.freepnglogos.com/uploads/new-google-logo-transparent--14.png"
									width="200"
									alt="new google logo transparent "
								/>
							</a>
						</div>
					</div>
					<hr />
					<div className="footer-bottom">
						<div className="copyright">
							Copyright &copy; 2019 Payyed. All rights reserved.
						</div>
						<ul className="bottom-links">
							<li>Seecurity</li>
							<li>terms</li>
							<li>Privacy</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
