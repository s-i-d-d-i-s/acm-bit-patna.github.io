// Latest Event
try{
	latest_event_title = document.getElementById('latest_event_title');
	latest_event_title.innerText = data['latest_event_title'];
}catch(err){
	console.log(err);
}

// Latest Event Banner
try{
	latest_event_banner = document.getElementById('latest_event_banner');
	latest_event_banner.style.background="url("+data['latest_event_banner']+") center center no-repeat";
}catch(err){
	console.log(err);
}


// Current Team
try{
	current_team = document.getElementById('current_team');
	current_team.innerText = data['current_team'];
}catch(err){
	console.log(err);
}


// Current Team Pic
try{
	current_team_pic = document.getElementById('current_team_pic');
	current_team_pic.style.background="url("+data['current_team_pic']+") center center no-repeat";
}catch(err){
	console.log(err);
}


// Top Coders Session
try{
	top_coder_session = document.getElementById('top_coder_session')
	top_coder_session.innerText = "Top Coders " + data['current_ranking_batch'];
}catch(err){
	console.log(err);
}


// Top Coders Banner
try{
	current_ranking_batch_image = document.getElementById('current_ranking_batch_image');
	current_ranking_batch_image.style.background="url("+data['current_ranking_batch_image']+") center center no-repeat";
}catch(err){
	console.log(err);
}

// Contact Mail
try{
	contact_email = document.getElementById('contact_email');
	contact_email.href="mailto:"+data['contact_email'];
	contact_email.innerText = data['contact_email'];
}catch(err){
	console.log(err);
}

// Contact No
try{
	contact_no = document.getElementById('contact_no');
	contact_no.innerText = data['contact_no'];
}catch(err){
	console.log(err);
}

// Current Session
try{
	current_session = document.getElementById('current_session');
	current_session.innerText = data['current_session'];
}catch(err){
	console.log(err);
}