const campo2 =  document.getElementById('telefoneInput');
campo2.addEventListener('keyup', formatarTelefone);

const input4 = document.getElementById('cpfInput');
input4.addEventListener('keyup', formatarCPF);

const input3 = document.getElementById('dataInput');
input3.addEventListener('keyup', formatarData);

function formatarTelefone(e){
    var v=e.target.value.replace(/\D/g,"");
    v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 
    v=v.replace(/(\d{5})(\d)/,"$1-$2");    
    e.target.value = v;
}

function formatarData(e){
    var v=e.target.value.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    e.target.value = v;
}

function formatarCPF(e){
    var v=e.target.value.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    e.target.value = v;
}






