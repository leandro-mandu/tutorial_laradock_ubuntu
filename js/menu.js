var json = [
{
    "id": "index",
    "title": "Início"
},
{
    "id": "git",
    "title": "Git"
},
{
    "id": "docker",
    "title": "Docker"
},
{
    "id": "docker_compose",
    "title": "Compose"
},
{
    "id": "laradock",
    "title": "Laradock"
},
{
    "id": "laradock_comandos",
    "title": "Criar Projeto"
},
{
    "id": "git_comandos",
    "title": "Guardar Projeto"
},
{
    "id": "laravel_comandos",
    "title": "Laravel: Continuando"
},
{
    "id": "migrations",
    "title": "Migrations"
},
{
    "id": "models",
    "title": "Models (terminar colocando configurações da model)"
},
{
    "id": "views",
    "title": "Views (terminar colocando configurações da view e template)"
},
{
    "id": "controllers",
    "title": "Controllers (terminar colocando configurações e rotas)"
}
];

function pop_menu(id = "index") {
	var links="";
  	console.log("Acionando classe menu");
	$.each(json, function(i, field){
		if(id==field.id){
			console.log(id+"=="+field.id);
	    	links+='<a class="nav-link disabled" href="'+field.id+'.html"><b><i>['+i+'] '+field.title.toUpperCase()+'</i></b></a>';
	    }
		else{
			console.log(id+"!="+field.id);
	    	links+='<a class="nav-link" href="'+field.id+'.html">['+i+'] '+field.title+'</a>';
	    }
      	$("#div_nav").html(links);
    });
}

function resolve_file_name(){
	var path=window.location.pathname;
	var path=path.split("/");
	var path=path[path.length-1].split(".");
	console.log(path[0]);
	return path[0];
}

$(document).ready(function(){
pop_menu(resolve_file_name());

	
});

