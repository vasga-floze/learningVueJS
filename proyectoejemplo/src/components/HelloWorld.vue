<template>
  <div class="hello">
    <hr>
    <h1 v-color="'green'" z>{{ msg }}</h1>
    <hr>
    <h1><span v-convText="'mayuscula'">{{tituloApp}}</span></h1>
    <h3 v-convText="'mayuscula'" v-mensaje = "'indigo'"></h3>
    <hr>
    <span v-html="mensajeHTML"></span>
    <hr>
    <!--LISTA DEL ARRAY PELICULAS-->
     <div>
        <ul>
          <li v-convText="'mayuscula'" v-for="dato in arrayPeliculas" v-bind:key="dato.nombre">
                  {{dato.nombre}} - {{dato.anio}}
                  <span v-if="dato.anio<=2003"> ----- Un clasico</span>
          </li>
        </ul>
     </div>
    <hr>
    <b-form>
        <b-row class="my-1">
            <b-col sm="6">
                <label for="nombre">Escriba el nombre</label>
            </b-col>
            <b-col sm="3">
                <b-form-input  v-focus type="text" v-model="nombre" placeholder="Vasti Gabriela"></b-form-input><br>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="6">
                <label for="edad">Escriba la edad</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="number" v-model="edad" placeholder="20"></b-form-input><br>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="6">
                <label for="edad">Seleccione el sexo</label>
            </b-col>      
            <b-col sm="1">
                <b-form-radio value="m" v-model="sexo">Masculino</b-form-radio>
                <b-form-radio value="f" v-model="sexo">Femenino</b-form-radio>
            </b-col>    
        </b-row>
        <br><hr>
        <b-button squared variant="primary" v-on:click="agregarDato()">Agregar Dato</b-button><br>
        <hr><br>
      </b-form>
    <!--mostrar la data en un table-->
    <!--b-table striped hover :items="arreglo"></!--b-table-->
    <b-table-simple>
      <b-thead>
          <b-th>ID</b-th>
          <b-th>Nombre</b-th>
          <b-th>Edad</b-th>
          <b-th>Sexo</b-th>
          <b-th></b-th>
      </b-thead>
      <b-tbody>
          <b-tr v-for="(dato, index) in arreglo" :key="dato.id">
            <b-td>{{dato.id}}</b-td>
              <b-td>
                <span v-if="actualizarF && idActualizar==index">
                    <input type="text" v-model="nuevoNombre" class="form-class"/>
                </span>
                <span v-else>
                    {{dato.nombre}}
                </span>                    
              </b-td>
              <b-td>
                 <span v-if="actualizarF &&  idActualizar==index">
                    <input type="number" v-model="nuevaEdad" class="form-class"/>
                </span>
                <span v-else>
                    {{dato.edad}}
                </span>    
              </b-td>              
              <b-td>{{ dato.sexo =='m'?'Masculino' : 'Femenino'}}</b-td>              
              <b-td>
                  <span v-if="actualizarF &&  idActualizar==index">
                      <b-button v-on:click="guardarActualizacion(index)" squared variant="success">Guardar</b-button>
                  </span>
                  <span v-else>
                      <b-button squared v-on:click="actualizar(index)" variant="warning">Actualizar</b-button>
                      <b-button squared variant="danger" v-on:click="eliminar(index)">Eliminar</b-button>
                  </span>
              </b-td>
          </b-tr>
      </b-tbody>
    </b-table-simple>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      arrayPeliculas:[
         
                    {nombre: 'Braveheart', anio:1995},
                    {nombre: 'Le llaman Bodhi', anio:1991},
                    {nombre: 'Los chicos del barrio', anio:1991},
                    {nombre: 'Terminator 2: El juicio final ', anio:1991},
                    {nombre: 'Matrix ', anio:1999},
                    {nombre: 'El diario de Noa', anio:2004},
                    {nombre: 'El señor de los anillos', anio:2003},
                    {nombre: 'La pasión de Cristo', anio:2004},
                    {nombre: 'Star Wars. Episode IV: A New Hope', anio:1977},
                    {nombre: 'El caballero oscuro', anio:2008},
                    {nombre: 'Boyhood', anio:2014},
                    {nombre: 'La vita è bella', anio:1977}
                ], 
                id: 1,
                nombre:'',
                edad:'',
                sexo:'',
                arreglo:[],
                nuevoNombre: '',
                nuevaEdad: '',
                nuevoSexo:'',
                actualizarF: '', 
                tituloApp:'Peliculas del ayer', //variable a bindear en href
                estilo:{
                  color: 'blue',
                  fontSize: '20px'
                },
                mensajeHTML: `<h2><em>Integrantes:</em></h2>
                  <em>Vasti Gabriela Flores Zelaya<br>
                      Roberto Kilmar Chevez Reyes<em>
                `
                
    }  
  },
  methods:{
      agregarDato(){
                    this.arreglo.push({
                       id:this.id++, nombre: this.nombre, edad: this.edad, sexo: this.sexo
                    });
                },
      actualizar(registro_id){
        //rellenar los campos
        this.idActualizar= registro_id;
        this.nuevoNombre=this.arreglo[registro_id].nombre;
        this.nuevaEdad=this.arreglo[registro_id].edad;
        this.nuevoSexo=this.arreglo[registro_id].sexo;
        this.actualizarF=true;
      },
      guardarActualizacion(registro_id){
        this.actualizarF=false;
        this.arreglo[registro_id].nombre= this.nuevoNombre,
        this.arreglo[registro_id].edad=this.nuevaEdad
      },
      eliminar(registro_id){
       //borrar elemento de la lista
        this.arreglo.splice(registro_id, 1);
     }
     
},
  directives:{
    mensaje:{
      bind:function(el, binding){
        el.innerHTML="Ciclo I - 2021",
        el.style.color= binding.value;
      }
    },

    //Directiva para capitalizar texto
    convText:{
      inserted:function(el, binding){
        if(binding.value == "mayuscula")
           el.innerHTML= el.innerHTML.toUpperCase();
        else
           el.innerHTML= el.innerHTML.toLowerCase();
      }
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

.backgroundImage{
  background-image: url();
}
</style>
