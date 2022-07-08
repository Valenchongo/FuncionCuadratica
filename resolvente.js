calcular = document.querySelector(".calcular");
total = document.querySelector(".resultadototal")

funcioncalcular =()=>{  //funcion para caclcular las raices
    a = document.querySelector(".inputa").value;
    b = document.querySelector(".inputb").value;
    c = document.querySelector(".inputc").value;
    a = parseFloat(a);
    b = parseFloat(b);
    c= parseFloat(c);

    if ( isNaN(a)){
        a =0;
    }
    if ( isNaN(b)){
        b =0;
    }
    if ( isNaN(c)){
        c =0;
    }
    r=b*b-4*a*c
    
    raizcuadrada =Math.sqrt(r);

    x1 = (-b+raizcuadrada)/(2*a);
    x1 = x1.toFixed(2);
    x2 =  (-b-raizcuadrada)/(2*a);
    x2 = x2.toFixed(2);
     
    xv = -b/(2*a);
    xv = xv.toFixed(2)
    yv = (a*xv*xv)+(b*xv)+c ;
    yv = yv.toFixed(2)

    if (isNaN(xv) || isNaN(yv)){
        xv.parseString;
        yv.parseString;
        xv = "-";
        yv = "-";
    }
  
    
    
    if(isNaN(x1)){
    
        htmlcode = `<section class="resultadoraiz">
    <div class="raices"><h2 class="raices">Raices o conjunto de ceros</h2>
        <div class="resultadoraices"><div> no tiene raices</div></div>
        </div>
    </div>
    </section>
    
    <section class="resultadovertice">
      <div class="vertice"><h2>el vertice esta en </h2>
      <div class="divvertice">  <div class="verticex"> X= ${xv}</div><br>
        <div class="verticey"> Y= ${yv}</div></div>
    </div>
    </section>`
     
    total.innerHTML = htmlcode
    }else{

    htmlcode = `<section class="resultadoraiz">
    <div class="raices"><h2 class="raices">Raices o conjunto de ceros</h2>
        <div class="resultadoraices"> <div class="raiz1"> X1 = ${x1}</div><br>
         <div class="raiz2"> X2 =${x2}</div>
        </div>
    </div>
    </section>
    
    <section class="resultadovertice">
      <div class="vertice"><h2>el vertice esta en </h2>
      <div class="divvertice">  <div class="verticex"> X= ${xv}</div><br>
        <div class="verticey"> Y= ${yv}</div></div>
    </div>
    </section>`
     
    total.innerHTML = htmlcode
    }
}

calcular.addEventListener("click",funcioncalcular);