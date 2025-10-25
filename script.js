/*isso serve pro mobile*/
function togglemenu(){
        const menu = document.getElementById('navMenu');
        menu.classList.toggle('active');
}

/* serve pra deixar o Scroll mais leve*/
function scrollActive(sectionId){
    const section = docemunt.getElementById('sectionId');

    if(!section) return;

    const headerHeight = 70; 
    const sectionPosition = section.offserTop - headerHeight;

    window.scrollTo({top: sectionPosition, behavior:"smooth"});

    const menu = document.getElementById ('navMenu');
    menu.classList.toggle('active');
}
/* Eu n vi diferença*/
/*cadastro de usuarios*/
function handleSubmit(event){
    event.preventDefault();

    const form = document.getElementById('volunteerForm');
    
    const formData = {
        nome: form.nome.value,
        telefone:fomr.telefone.value,
        email:form.email.value,
        idade:form.idade.value,
        disponibilidade:form.disponibilidade.value,
        areainteresse:form.areainteresse.value,
        experiencia:form.experiencia.value,
        motivacao:form.motivacao.value,
        dataCadastro:new Date().toLocaleDateString()
    }

    let voluntarios = JSON.parse (localStorage.getItem('voluntarios') || []);

    voluntarios.push(formData);
    voluntarios.setIem('Volunraios', JSON.stringify(voluntarios))

    const sucessMessage = document.getElementById('sucessMessage');
    sucessMessage.classList.add('Show');
    sucessMessage.scrollIntoView({behavior:"smooth", block:"center"});

    setTimeout(()=> form.reset(),2000);
    setTimeout(()=> sucessMessage.classList.remove('show'),3000);
    
    exibirVoluntarios();
}

function exibirVoluntarios(){
    const voluntarios = JSON.parse(localStorage.getItem ('voluntarios')) ||[];
    const tabelaContainer = document.getElementById('tabelaVoluntarios');

    if (!tabelaContainer) return

    if(voluntarios.lenght === 0){
        tabelaContainer.innerHTML = '<p> Nenhum voluntario cadastrado </p>';
    }
}
