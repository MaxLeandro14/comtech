<template>
<div>
    <div class="back-cor">
      <div class="topo">
          <div class="infor-topo">
              <p>ER-313K-04</p>
          </div>
          <div class="infor divisor">
              <p>Duração: 50h</p>
              <p>Total: 2 dias e 2h</p>
          </div>
          <div class="infor">
            <span>0h</span>
            <span style="float:right">100h</span>
          </div>
          <q-linear-progress :value="progress" color="positive" class="q-mt-md" ></q-linear-progress>
      </div>
      <div class="back-branco"> 
          <div class="marg-branco">
              <div class="svg-s">
                <div class="infor">
                  <span class="infor-dis">Hidráulica</span>
                  <span class="infor-nu">30h</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 23"><path fill="#c6cacb" d="M11.7 5.1H480v13.3H11.7z"/><path @click="layout = true" d="M249.1 18.5h-49.7c-1.2 0-2.1-1-2.1-2.1V8.6c0-1.2 1-2.1 2.1-2.1h49.7c1.2 0 2.1 1 2.1 2.1v7.7c0 1.2-.9 2.2-2.1 2.2z" fill="#c22e29"/></svg>
              </div>

              <div class="svg-s">
                <div class="infor">
                  <span class="infor-dis">Elétrica</span>
                  <span class="infor-nu">32h</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 23"><path fill="#c6cacb" d="M11.7 5.1H480v13.3H11.7z"/><path @click="layoutt = true" d="M107.1 17.5H57.4c-1.2 0-2.1-1-2.1-2.1V7.7c0-1.2 1-2.1 2.1-2.1h49.7c1.2 0 2.1 1 2.1 2.1v7.7c0 1.1-.9 2.1-2.1 2.1z" fill="#c22e29"/></svg>
              </div>

              <div class="svg-s">
                <div class="infor">
                  <span class="infor-dis">Mecânica</span>
                  <span class="infor-nu">15h</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 23"><path fill="#c6cacb" d="M11.7 5.1H480v13.3H11.7z"/><path @click="layouttt = true" d="M125.1 17.8h-22.7c-1.2 0-2.1-1-2.1-2.1V8c0-1.2 1-2.1 2.1-2.1h22.7c1.2 0 2.1 1 2.1 2.1v7.7c.1 1.1-.9 2.1-2.1 2.1z" fill="#c22e29"/></svg>
              </div>
          </div>
      </div>
    </div>

    <q-dialog v-model="layout">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primaryy">
            <q-toolbar>
              <q-toolbar-title>Situações</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" ></q-btn>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <p v-for="n in contentSize" :key="n">
                  
                <div class="acordeao">
                   <section id="item">
                      <a href="#item" class="box" @click="acord = !acord">
                        <p>Quantidade insulficiente de parafusos disponiveis para troca..</p>
                        <div class="clearfix">
                          <span class="min">20mn</span>
                          <span class="detalhes">+ detalhes</span>
                        </div>
                      </a>
                      <ul v-if="acord">
                        <li class="lista-acord"><p>Quantidade insulficiente de parafusos disponiveis para troca.. Quantidade insulficiente de parafusos disponiveis para troca..</p>
                         <div class="bot-chat">
                            <button>chat</button>
                          </div>
                        </li>
                      </ul>
                   </section>
                </div>

                <div class="acordeao">
                   <section id="item2">
                      <a href="#item2" class="box" @click="acord2 = !acord2">
                        <p>Gabinete não disponivel..</p>
                        <div class="clearfix">
                          <span class="min">35mn</span>
                          <span class="detalhes">+ detalhes</span>
                        </div>
                      </a>
                      <ul v-if="acord2">
                        <li class="lista-acord"><p>Quantidade insulficiente de parafusos disponiveis para troca.. Quantidade insulficiente de parafusos disponiveis para troca..</p>
                          <div class="bot-chat">
                            <button>chat</button>
                          </div>
                        </li>
                      </ul>
                   </section>
                </div>

              </p>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

      <q-dialog v-model="layoutt">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primaryy">
            <q-toolbar>
              <q-toolbar-title>Situações</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" ></q-btn>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <p v-for="n in contentSize" :key="n">
                  
                <div class="acordeao">
                   <section id="item">
                      <a href="#item" class="box" @click="acord3 = !acord3">
                        <p>Motor não disponivel para troca..</p>
                        <div class="clearfix">
                          <span class="min">10mn</span>
                          <span class="detalhes">+ detalhes</span>
                        </div>
                      </a>
                      <ul v-if="acord3">
                        <li class="lista-acord"><p>Quantidade insulficiente de parafusos disponiveis para troca.. Quantidade insulficiente de parafusos disponiveis para troca..</p>
                         <div class="bot-chat">
                            <button>chat</button>
                          </div>
                        </li>
                      </ul>
                   </section>
                </div>

              </p>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

      <q-dialog v-model="layouttt">
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-primaryy">
            <q-toolbar>
              <q-toolbar-title>Situações</q-toolbar-title>
              <q-btn flat v-close-popup round dense icon="close" ></q-btn>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <p v-for="n in contentSize" :key="n">
                  
                <div class="acordeao">
                   <section id="item">
                      <a href="#item" class="box" @click="acord4 = !acord4">
                        <p>Ferramenta indisponivel..</p>
                        <div class="clearfix">
                          <span class="min">5mn</span>
                          <span class="detalhes">+ detalhes</span>
                        </div>
                      </a>
                      <ul v-if="acord4">
                        <li class="lista-acord"><p>Quantidade insulficiente de parafusos disponiveis para troca.. Quantidade insulficiente de parafusos disponiveis para troca..</p>
                         <div class="bot-chat">
                            <button>chat</button>
                          </div>
                        </li>
                      </ul>
                   </section>
                </div>
     

              </p>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

</div>
</template>
<script>
export default {
    data(){
        return {
            progress: 0.5,
            progressLabel1: 12,
            layout: false,
            layoutt: false,
            layouttt: false,
            moreContent: true,
            drawer: false,
            drawerR: false,
            dialog: false,
            maximizedToggle: true,
            acord: false,
            acord2: false,
            acord3: false,
            acord4: false
        }
    },
    computed: {
        contentSize () {
          return this.moreContent ? 150 : 5
        }
    }
}
</script>
<style scoped>
    h1, span, p, img, a, ul, li, svg, div {
        margin: 0;
        padding: 0;
    }
    .infor-topo{
        font-size: 15px;
        color: #000;
        text-decoration: underline;
    }
    .infor {
        color: #525252;
    }
    .divisor {
        padding: 13px 0 29px 0;
    }
  .back-cor {
      background: #B5DAD2;
  }
  .topo {
      padding: 15px 10px 50px 10px;
  }
  .back-branco {
      background: #ffff;
      border-radius: 30px 30px 0 0;
  }
  .box {
      padding: 3px;
      font-size: 13px;
      border: 1px solid #dedada;
      border-radius: 9px 9px 0 0;
      background: #f3f2f2;

      display: block;
      color: #000;
      text-decoration: none;
  }
   .box p {
       padding: 5px 0;
   }
  .min {
      padding: 2px 5px;
      background: #ff5e5e;
      border-radius: 5px;
      color: #fff;
  }
  .detalhes {
      float: right;
      padding: 2px;
      color: #676565;
  }
  .clearfix::before, .clearfix::after {
    content: ' ';
    display: table;
  }
  .clearfix::after {
      clear:both;
  }
  .bg-primaryy {
      background: #B5DAD2;
      color: #000;
  }
  .bg-primaryyy {
      background: #fff;
  }
  .acordeao section ul p {
    text-align: center;
  }
  .acordeao {
    margin: 7px 0 15px 0;
  }
  .lista-acord{
    padding: 12px 3px 4px 3px;
    text-align: justify;
    border: 1px solid #cac6c6;
    border-radius: 0 0 7px 7px;
  }
  .acordeao .bot-chat button {
    width: 100%;
    margin-top: 21px;
    background:#eaeaea;
  }
  .secondaryyy {
    color: #44ff97;
  }
  .title-sin {
    color: #fff;
  }
  .marg-branco {
    padding: 35px 10px;
  }
  .infor-nu {
    float:right;
    margin-right: 5px;
  }
  .infor-dis {
    float: left;
    margin-left: 5px;
  }
</style>