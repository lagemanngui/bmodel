
$(document).ready(function(){

  $(".box").click(function(evt){
    // console.log("Clicou na box");
  });

  $(".box-item").click(function(evt){
    evt.stopPropagation();
    // console.log("Clicou no box-item");
  });

  $(".box-body").click(function (evt){
    evt.stopPropagation();
    if($(evt.target).hasClass("delete-item"))
    {
      removeItem(evt.target);
    }
  });

  $(".add-button").click(function(evt){
    evt.stopPropagation();
    var curr_pressed = $(this);
    var curr_box = curr_pressed.parent().parent();

    // var new_item = "<div class='box-item'><p><textarea rows='1' placeholder='Novo item..' spellcheck='false'></textarea></p>";
    var new_item = "<div class='box-item'><p><div contenteditable = 'true' class ='edit-div'></div></p>"
    new_item += "<div class = 'delete-item'>Remover</div></div>"
    curr_box.children(".box-body").append(new_item);
    autosize($('textarea'));
  });

  loadModel();

});

function saveModelo(){

  var saved = "true";
  var proposta = $("#modelo_proposta").html();
  var recursos = $("#modelo_recursos").html();
  var parceiros = $("#modelo_parceiros").html();
  var atividades  = $("#modelo_atividades").html();
  var canais = $("#modelo_canais").html();
  var segmentos = $("#modelo_segmentos").html();
  var relacionamento = $("#modelo_relacionamento").html();
  var custos = $("#modelo_custos").html();
  var receita = $("#modelo_receita").html();

  window.localStorage.setItem("msaved", saved);
  window.localStorage.setItem("m0", proposta);
  window.localStorage.setItem("m1", recursos);
  window.localStorage.setItem("m2", parceiros);
  window.localStorage.setItem("m3", atividades);
  window.localStorage.setItem("m4", canais);
  window.localStorage.setItem("m5", segmentos);
  window.localStorage.setItem("m6", relacionamento);
  window.localStorage.setItem("m7", custos);
  window.localStorage.setItem("m8", receita);

  showInfo("nada");

}
function showInfo(msg){

  $(".info").finish();

  $(".info").animate({
    top: "0",
    opacity: "0.8"
  }, 300).animate({
    opacity: "0.8"
  },500).animate({
    top: "-50px",
    opacity: "0"
  }, 800);
}
function loadModel(){
  if(window.localStorage.getItem("msaved") == "true"){
    insertHtmlModel("m0", "#modelo_proposta");
    insertHtmlModel("m1", "#modelo_recursos");
    insertHtmlModel("m2", "#modelo_parceiros");

    insertHtmlModel("m3", "#modelo_atividades");
    insertHtmlModel("m4", "#modelo_canais");
    insertHtmlModel("m5", "#modelo_segmentos");

    insertHtmlModel("m6", "#modelo_relacionamento");
    insertHtmlModel("m7", "#modelo_custos");
    insertHtmlModel("m8", "#modelo_receita");
  }
}
function insertHtmlModel(data, target){
  if(window.localStorage.getItem(data) == null){
    return;
  }

  var toInsert = $(target);
  toInsert.append(window.localStorage.getItem(data));
}
function removeItem(target){
  var curr_delete = $(target);
  curr_delete.parent().remove();
}
function clearData(){
  var clear = confirm("Deseja mesmo limpar o documento atual?");
  if(clear){
    window.localStorage.clear();
    location.reload();
  }
}
function openHelp(){
  window.open("https://github.com/lagemanngui/bmodel/wiki/Ajuda");
}
