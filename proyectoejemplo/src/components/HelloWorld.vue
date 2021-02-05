<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--
      <a v-bind:href="ruta">Enlace</a>
    -->
    <h1><span>{{tituloApp}}</span></h1>

    <span v-html="mensajeHTML"></span>
    
    <div class="container">
        <b-form>
          <!--
        <b-row class="my-1">
            <b-col sm="3">
                <label for="nombre">Escriba el nombre de la pelicula</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="text" v-model="nombre" placeholder="Toy Story "></b-form-input>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Escriba el año de lanzamiento</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="number" v-model="edad" placeholder="1995"></b-form-input>
            </b-col>
        </b-row>
        
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Seleccione el sexo</label>
            </b-col>      
            <b-col sm="1">
                <b-form-radio value="m" v-model="sexo">Masculino</b-form-radio>
                <b-form-radio value="f" v-model="sexo">Femenino</b-form-radio>
            </b-col>    
        </b-row>
        

        <b-button variant="primary" v-on:click="agregarDato()">Agregar pelicula</b-button>
        -->
      </b-form>
    </div>
    
    
      
        
          <div>
            <ul>
              <li v-for="dato in arrayPeliculas" v-bind:key="dato.nombre">
                  {{dato.nombre}} - {{dato.anio}}> 
                  <span v-if="dato.anio<=2001"> --> Un clasico</span>
              </li>
            </ul>
          </div>
        
      
    
    

    <!--mostrar la data en un table-->
    <!--b-table striped hover :items="arreglo"></!--b-table-->
    <b-table-simple>
      <!--<b-thead>
          <b-th>ID</b-th>
          <b-th>Nombre</b-th>
          <b-th>Edad</b-th>
          <b-th>Sexo</b-th>
          <b-th></b-th>
      </b-thead>
      -->
      <b-tbody>
          <b-tr v-for="(dato, index) in arreglo" :key="dato.id">
              <b-td>
                {{dato.id}}
              </b-td>
              <b-td>
                <span v-if=" actualizarF && idActualizar==index">
                  <input type="text" v-model="nuevoNombre" class="form-class"/>
                </span>
                <span v-else>
                  {{dato.nombre}}
                </span>
              </b-td>
              <b-td>
                <span v-if=" actualizarF && idActualizar==index">
                  <input type="text" v-model="nuevaEdad" class="form-class"/>
                </span>
                <span v-else>
                  {{dato.edad}}
                </span>
              </b-td>
              <!--<b-td><b-form-input type="number" v-model="dato.edad"></b-form-input></b-td>-->
              <b-td>{{ dato.sexo =='m'?'Masculino' : 'Femenino'}}</b-td>
              <b-td><span v-if="dato.edad>=18">Mayor de edad</span></b-td>
              <b-td>
                <span v-if=" actualizarF && idActualizar==index">
                  <button v-on:click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                </span>
              
                <span v-else>
                  <button v-on:click="actualizar(index)" class="btn btn-warning">Actualizar</button>
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
                tituloApp:'PELICULAS DEL AYER', //variable a bindear en href
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
                        id: this.id++, nombre: this.nombre, edad: this.edad, sexo: this.sexo
                    });
                },
      actualizar(regis_id){
        //RELLENAR LOS CAMPOS
        this.idActualizar = regis_id;
        this.actualizarF = regis_id; //Invento y suposicion mia
        this.nuevoNombre=this.arreglo[regis_id].nombre;
        this.nuevaEdad=this.arreglo[regis_id].edad;
        this.nuevoSexo=this.arreglo[regis_id].sexo;
      },
      guardarActualizacion(regis_id){
        this.arreglo[regis_id].nombre=this.nuevoNombre,
        this.arreglo[regis_id].edad=this.nuevaEdad
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
