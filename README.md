# dropSlider

### Sobre
Este slide possui apenas 2.600KB (CSS e JS minificados) !
Uma boa ideia para estudar o codigo usado e ate mesmo usar em algum projeto!
A ideia deste slider e ajudar as pessoas que estao começando a desenvolver aplicativos para a web usando javascript e ou com jQuery!
Fique a vontade para estudar o codigo e modifica-lo para deixar da forma que mais lhe agrada! 

###Como usar? 
Adicione o arquivo .js do jQuery e o .js do slide 
```
<script type='text/javascript' src='js/jquery_core_1.11.3.js'>
<script type='text/javascript' src='js/drop_script.min.js'> 
```

Adicione tambem o .css (Aconselho a coloca-lo antes do .js)
```
<link rel='stylesheet' href='css/style.css /> 
```

Coloque as imagens dentro de uma div ! 
```
<div id='img_conteudo'>
  <img src='img/img1.jpg' />
  <img src='img/img2.jpg' />
  <img src='img/img3.jpg' />
  <img src='img/img4.jpg' />
</div> 
```

Agora so adicionar o trigger! 
```
$('#img_conteudo').dropSlide(); 
```

###Parametros aceitos 
DropSlider possui 2 parametros que sao: Width e Height!
Estes sao os parametros de controle de tamanho do slider.
Para usa-lo, apenas siga este padrao: 
```
$('#img_conteudo2').dropSlide(400,200);
//Width: 400
//Height: 200 
```

###Contato 
Possui alguma duvida sobre o slide ou tem alguma ideia para melhora-lo?
Mande um email - lucas_front@yahoo.com.br 
