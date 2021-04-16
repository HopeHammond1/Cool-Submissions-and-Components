Vue.component('codenames', {
  props: ['name','codename'],
  data:function(){
    return{
      propname:this.name
    }
  },
  methods:{
    nameChange:function(){
      if(this.propname==this.name){
        this.propname=this.codename;
      }else{
        this.propname=this.name;
      }
    }
  },
  template: '<div v-on:click="nameChange()">{{propname}}</div>'
})

var app=new Vue({
  el:"#app",
  data:{
      name:"",
      email:"",
      notSubmitted:"",
      submitted:"",
    list:[
      {name:"Protagonist",codename:"Joker"},
      {name:"Anne",codename:"Panther"},
      {name:"Ryuji",codename:"Skull"}
    ]    
  },
  computed:{
    
  },
  watch:{
    name:function(){
      this.check();
    },
    email:function(){
      this.check();
    }
  },
  methods:{
    check:function(){
      if(this.name==""){
        this.notSubmitted="";
        this.submitted="";
      }else if(this.name.length<2){
        this.notSubmitted="The input needs to have at least 2 characters";
        this.submitted="Not Submitted";
      }else{
        if(this.validEmail(this.email)==true){
          this.notSubmitted="";
          this.submitted="Submitted";
        }else{
          this.notSubmitted="The input needs to be a valid email address.";
          this.submitted="Not submitted";
        }
      }
    },
    validEmail:function(inputText){
      var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(inputText.match(mailformat)){
        return true;
      }else{
        return false;
      }
    }
  }
})