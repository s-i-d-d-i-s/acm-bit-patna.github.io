function getCoreMemberHeading(){
	var res = `
	<div class="text">
		<p class="heading-num">01</p>
		<div class="text__wrap">
			<h2 class="heading">Core Members</h2>                    
		</div>
	</div>
	`
	return res;
}


function getCoordinatorMemberHeading(){
	var res = `
	<div class="text">
		<p class="heading-num">01</p>
		<div class="text__wrap">
			<h2 class="heading">Coordinators</h2>                    
		</div>
	</div>
	`
	return res;
}


function getCoreMemberContent(){
	var res = "";
	for(let i=0;i<data['core_members'].length;i++){
		var temp = `
		<div class="text">
			<div class="text__wrap">
				<h2 class="heading" style="font-size: 2em;"> {NAME} <br><span style="font-size: 0.5em;">{POST}</span></h2>
				<p class="text__works">{DESC}</p>
			</div>
		</div>
		`;
		temp = temp.replace("{NAME}",data['core_members'][i]['name']);
		temp = temp.replace("{POST}",data['core_members'][i]['post']);
		temp = temp.replace("{DESC}",data['core_members'][i]['desc']);
		res += temp;
	}
	return res;
}


function getCoordinatorMemberContent(){
	
	var res = "";
	for(let i=0;i<data['coordinators'].length;i++){
		var temp = `
		<div class="text">
			<div class="text__wrap">
				<h2 class="heading" style="font-size: 2em;"> {NAME} <br><span style="font-size: 0.5em;">{POST}</span></h2>
				<p class="text__works">{DESC}</p>
			</div>
		</div>
		`;
		temp = temp.replace("{NAME}",data['coordinators'][i]['name']);
		temp = temp.replace("{POST}",data['coordinators'][i]['post']);
		temp = temp.replace("{DESC}",data['coordinators'][i]['desc']);
		res += temp;
	}
	return res;
}


d = document.getElementsByClassName('wrapper')[0];
d.innerHTML +=  getCoreMemberHeading();
d.innerHTML +=  getCoreMemberContent();
d.innerHTML +=  getCoordinatorMemberHeading();
d.innerHTML +=  getCoordinatorMemberContent();

