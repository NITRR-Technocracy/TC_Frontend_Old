import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../Styles/styles.module.css";
import Navbar from '../../../Home/Navbar-new/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, TextField, Grid, useThemeProps } from "@mui/material";
import { useParams } from "react-router-dom";
// import events from '../../../assets/datas/EventsDatas'
import axios from "axios";
// import Cookies from 'js-cookie';
import { NavLink } from "react-router-dom";
import img from '../../../../assets/images/leftArrow.png'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function ScavengerHunt() {

	const { id } = useParams();
	// data of event
	const data = {
		name: "",
		desc: "",
		teamSize: 0,
		teamMin: 0
	}

	// events.map((event) => {
	// 	if (String(event.id) === id) {
	// 		data.name = event.title;
	// 		data.desc = event.details;
	// 		data.teamSize = event.teamSize;
	// 		data.teamMin = event.teamMin;
	// 	}
	// });

	const count = [];
	for (let i = 1; i < data.teamSize; i++) {
		count.push(String(i));
	}
	console.log(count);

	const [form, set] = useState({
		"event": "Scavenger Hunt",
		"team_name": "",
		"leader_name": "",
		"leader_mail": "",
		"leader_whatsapp": "",
		"leader_college": "",
		"leader_number": "",
		"leader_branch": "",
		"yos": "",
		"mem2": "",
		"mem3": "",
		"mem4": ""
	});

	function handle(e) {
		const newData = { ...form }
		newData[e.target.name] = e.target.value
		set(newData)
	}

	function submit() {
		console.log(form);
		alert("Please wait...Don't refresh the page");
		axios.post(`https://aavartan-backend-production.up.railway.app/scavengerhunt/${JSON.stringify(form)}`)
			.then(res => {
				if (res.data === 0) {
					alert("Error occurred");
				}
				else if (res.data === 1) {
					alert("Team registered successfully");
				}
			})
	}

	const [attri, setAttri] = useState(false);
	const [toggle, setToggle] = useState(false);

	function changeState() {
		setToggle(!toggle);
		setAttri(!attri);
	}

	return (
		<>
		<Navbar />
		<ThemeProvider className={styles} theme={darkTheme}>
			<div className={styles.container}>

				<Container>
				<div className={styles.goback}>
						<NavLink to="/events"><img src={img} alt="" /></NavLink>
					</div>
					<div className={styles.description}>
						{/* <div className={styles.event_image}></div> */}
						<div>
							<h3 className={styles.event_title}>SCAVENGER HUNT</h3>
							<p className={styles.event_description}>"A Box With No Hinges, Key or Lid, Yet Has a Golden Treasure Hidden In It. Solve This Riddle, And You May Be The One To Uncover The Exceptional Treasure Within."</p>
							<p className={styles.event_more}>A scavenger hunt is a game in which the organizers prepare a list defining specific items, which the participants seek to gather or complete all items on the list, usually without purchasing them.</p>
							<p className={styles.event_materials}>
								<b>RULES : </b>
								<ul>
									<li>- Two stages will be there. First will be a quiz (only by team captain). The 2nd stage will be a Scavenger Hunt.</li>
									<li>- Top 12 teams will be shortlisted for Scavenger Hunt.</li>
									<li>- 4 members with at least 1 girl and 1 boy are necessary in a team.</li>
								</ul>
							</p>
							<p className={styles.event_materials}>
								<b>STAGE 1 : QUIZ</b>
								<ul>
									<li>- 15 minutes quiz on google forms.</li>
									<li>- Max 45 questions (based on topics of technology)</li>
									<li>- Selection criteria: Max marks/questions.</li>
									<li>- Tie breaker: Based on time submission.</li>
								</ul>
							</p>
							<p className={styles.event_materials}>
								<b>STAGE 2 : SCAVENGER HUNT</b>
								<p><b>Round 1</b></p>
								<ul>
									<li>- 4 batches will be divided, 3 teams in each batch.</li>
									<li>- Team captains will select chits for the items they have to find and location will be provided.</li>
									<li>- If a team find their item before time, then they can help other teams of their own batch after submitting the item to nearest volunteer.</li>
									<li>- Points will be given on total number of items searched by a batch.</li>
									<li>- Tie breaker: Based on time.</li>
									<li>- Two batches will qualify for 2nd round.</li>
								</ul>
								<p><b>Round 2</b></p>
								<ul>
									<li>- 2 batches will compete with same rules/conditions.</li>
									<li>- One batch will qualify for 3rd round.</li>
								</ul>
								<p><b>Round 3</b></p>
								<ul>
									<li>- Rules for final round will be disclose on the day of event.</li>
								</ul>
								<p><b>NOTE: </b>If any uncertainty or confusion occurs during event then managing committee will take the decision.</p>
								<p>If any team doesn’t report on given time duration, then points will be deducted or incase disqualified.</p>
							</p>
							<p className={styles.event_materials}>
								<b>TIMINGS :</b>
								<ul>
									<li>QUIZ: 15 MINUTES</li>
									<li>ROUND 1: 20 MINUTES</li>
									<li>ROUND 2: 15 MINUTES</li>
									<li>ROUND 3: 25 MINUTES</li>
								</ul>
							</p>
							<p className={styles.event_location}><b>LOCATION : </b>Start With Central Garden Then Whole Campus</p>
							<p className={styles.event_time}><b>TIME : </b>2 PM- 5 PM</p>
							<p className={styles.event_time}><b>DATE : </b>05.02.2023</p>
							<p className={styles.event_time}><b>CONTACT : </b>Aparna , Suchit</p>
						</div>
					</div>
				</Container>
				<Container>
					<div className={`${styles.registration} ${styles.registration_wrapper}`}>
						<h2 className={styles.heading}>Registration Form</h2>
						<Formik initialValues={{ team_name: "", team_leader_name: "", college: "", full_name_1: "", number_1: "", full_name_2: "", number_2: "", full_name_3: "", number_3: "" }}>
							<form className={styles.form} >
								<Grid container spacing={2}>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_name"
											name="team_name"
											label="Team Name"
											variant="outlined"

											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_leader_name"
											name="leader_name"
											label="Team Leader Name"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="email"
											label="Leader's Email Address"
											name="leader_mail"
											autoComplete="email"
											variant="outlined"
											autoFocus
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									<Grid item xs={12} >
										<TextField
											margin="normal"
											required
											fullWidth
											id="whatsapp_no"
											name="leader_whatsapp"
											label="Leader's WhatsApp No"
											variant="outlined"

											autoComplete='off'
											onKeyUp={(e) => handle(e)}

										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="college_name"
											name="leader_college"
											label="Leader's College Name"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>



									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="team_leader_number"
											name="leader_number"
											label="Team Leader Contact no"
											variant="outlined"
											autoComplete='off'
											type="number"

											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="branch"
											name="leader_branch"
											label="Branch"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											required
											fullWidth
											id="year"
											name="yos"
											label="Year"
											variant="outlined"
											autoComplete='off'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem2"
											id="name2"
											label="Team Member Name 2"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem3"
											id="name3"
											label="Team Member Name 3"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											margin="normal"
											name="mem4"
											id="name4"
											label="Team Member Name 4"
											type="text"
											required
											fullWidth
											variant="outlined"
											autoComplete='none'
											onKeyUp={(e) => handle(e)}
										/>
									</Grid>
								</Grid>
								<button type="button" className={styles.registration_button} onClick={submit} >Register</button>
							</form>
						</Formik>

					</div>
				</Container>

			</div>
		</ThemeProvider>
		</>
	);
}
export default ScavengerHunt;