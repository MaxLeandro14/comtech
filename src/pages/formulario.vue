<template>
    <div>
        <div class="back-cor">
            <div class="topo">
                <div class="infor-topo">
                    <p>ER-313K-04</p>
                </div>
            </div>
            <div class="back-branco">
                <div class="q-pa-md">
                    <div class="q-gutter-md" style="max-width: 300px">
                        <q-input outlined v-model="text" label="OM" ></q-input>
                        <q-input outlined v-model="text2" label="Hora" ></q-input>
                        <q-input filled v-model="text3" label="Descrição" :dense="dense" ></q-input>
                        <div>
                            <div>
                                <span class="title-sin">Origem:</span>
                                <div class="disciplina">Mecânica</div>
                            </div>
                            <div class="sinalizar">
                                <span class="title-sin">Sinalizar para:</span>
                                <div class="title-box">Aprovisionamento</div>
                                <div class="title-box">Oficina</div>
                            </div>
                        </div>
                        <div class="centro">
                            <router-link to="/"><q-btn class="full-width" v-model="text4" color="brown-5" label="Inserir" ></q-btn></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {  
    data(){
        return {
            text: '',
            text2: '',
            text3: '',
            text4: '',
        }
    }
}
</script>
<style>
h1, span, p, img, a, ul, li {
        margin: 0;
        padding: 0;
    }
    .infor-topo{
        font-size: 15px;
        color: #000;
        text-decoration: underline;
    }

  .back-cor {
      background: #B5DAD2;
  }
  .topo {
     padding: 15px 10px 24px 10px;
  }
  .back-branco {
      background: #ffff;
      border-radius: 30px 30px 0 0;
  }
 .disciplina {
     background: #b5dad2;
     text-align: center;
     padding: 5px 0px;
 }
 .sinalizar {
     background: #343f4e;
     padding: 10px 5px;
     margin-top: 8px;
 }
 .title-box {
     background: #fff;
     padding: 5px 10px;
     margin: 5px 0px;
     text-align: center;
     border-radius: 5px;
 }
 .title-sn {
    color: #fff;
 }
</style>
