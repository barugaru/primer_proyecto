function mostrarN3() {
    const mostrarN3 = document.getElementsByClassName("N3");
    for (let i = 0; i < mostrarN3.length; i++) {
      mostrarN3[i].style.opacity = 1;
    }
  }
  
  function ocultarN3() {
    const ocultarN3 = document.getElementsByClassName("N3");
    for (let i = 0; i < ocultarN3.length; i++) {
      ocultarN3[i].style.opacity = 0;
    }
  }
      
  function mostrarYOcultarN3() {
    let toggle = document.getElementById("switchN3");
    if (toggle.value == "mostrar") {
      mostrarN3();
      toggle.value = "ocultar";
    } else {
      ocultarN3();
      toggle.value = "mostrar";
    }
  }

  function mostrarN4() {
    const mostrarN4 = document.getElementsByClassName("N4");
    for (let i = 0; i < mostrarN4.length; i++) {
      mostrarN4[i].style.opacity = 1;
    }
  }
  
  function ocultarN4() {
    const ocultarN4 = document.getElementsByClassName("N4");
    for (let i = 0; i < ocultarN4.length; i++) {
      ocultarN4[i].style.opacity = 0;
    }
  }
      
  function mostrarYOcultarN4() {
    let toggle = document.getElementById("switchN4");
    if (toggle.value == "mostrar") {
      mostrarN4();
      toggle.value = "ocultar";
    } else {
      ocultarN4();
      toggle.value = "mostrar";
    }
  }

  function mostrarN5() {
    const mostrarN5 = document.getElementsByClassName("N5");
    for (let i = 0; i < mostrarN5.length; i++) {
      mostrarN5[i].style.opacity = 1;
    }
  }
  
  function ocultarN5() {
    const ocultarN5 = document.getElementsByClassName("N5");
    for (let i = 0; i < ocultarN5.length; i++) {
      ocultarN5[i].style.opacity = 0;
    }
  }
      
  function mostrarYOcultarN5() {
    let toggle = document.getElementById("switchN5");
    if (toggle.value == "mostrar") {
      mostrarN5();
      toggle.value = "ocultar";
    } else {
      ocultarN5();
      toggle.value = "mostrar";
    }
  }


/*function mostrar() {
    const mostrarRt = document.getElementsByTagName("rt");
    for (let i = 0; i < mostrarRt.length; i++) {
      mostrarRt[i].style.opacity = 1;
    }
  }
  
  function ocultar() {
    const ocultarRt = document.getElementsByTagName("rt");
    for (let i = 0; i < ocultarRt.length; i++) {
      ocultarRt[i].style.opacity = 0;
    }
  }
      
  function mostrarYOcultar() {
    let toggle = document.getElementById("flexSwitchCheckChecked");
    if (toggle.value == "mostrar") {
      mostrar();
      toggle.value = "ocultar";
    } else {
      ocultar();
      toggle.value = "mostrar";
    }
  }*/