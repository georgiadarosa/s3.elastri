import { useState } from "react";

const C = {
  azul:"#0043CE",verde:"#6FDC8C",cinzaClaro:"#DDE1E6",cinzaEscuro:"#878D96",
  branco:"#ffffff",cinzaBg:"#f4f6f9",cinzaTexto:"#21272A",cinzaSecundario:"#697077",
  cinzaBorda:"#DDE1E6",azulClaro:"#e8eeff",verdeClaro:"#e6faf0",
  vermelho:"#da1e28",vermelhoClaro:"#fff1f1",amarelo:"#f1c21b",amareloClaro:"#fdf6dc",
};

function Logo() {
  return (
    <div style={{lineHeight:1.2}}>
      <div style={{fontSize:17,fontWeight:700,color:"white",fontFamily:"Arial,sans-serif",letterSpacing:"0.2px"}}>Elastri Engenharia</div>
    </div>
  );
}

// ── TABELAS REV 26 ───────────────────────────────────────────────────────────
const EE_DEPT=[{s:"ADM",l:"Administrativo"},{s:"CM",l:"Comercial"},{s:"CTB",l:"Contabilidade"},{s:"CT",l:"Controladoria Técnica"},{s:"DHO",l:"Desenvolvimento Humano e Organizacional"},{s:"DR",l:"Direção"},{s:"EG",l:"Engenharia"},{s:"FN",l:"Financeiro"},{s:"P&C",l:"Pessoas & Cultura"},{s:"S3",l:"Sustentabilidade"},{s:"SU",l:"Suprimentos"},{s:"SX",l:"SX Rental"},{s:"TI",l:"Tecnologia da Informação"}];
const EE_TIPOS=[{s:"AER",l:"Aeroporto"},{s:"CE",l:"Complexo Eólico"},{s:"ESC",l:"Escritório Matriz"},{s:"FER",l:"Ferrovia"},{s:"IND",l:"Indústria"},{s:"LT",l:"Linha de Transmissão"},{s:"MIN",l:"Mineração"},{s:"O&G",l:"Óleo & Gás"},{s:"OAE",l:"Obra de Arte Especial"},{s:"OCT",l:"Obra de Contenção"},{s:"PCH",l:"Pequena Central Hidrelétrica"},{s:"POR",l:"Porto"},{s:"RMT",l:"Rede de Média Tensão"},{s:"ROD",l:"Rodovia"},{s:"SAN",l:"Saneamento"},{s:"SE",l:"Subestação Elétrica"},{s:"UFV",l:"Usina Fotovoltaica"},{s:"UHE",l:"Usina Hidrelétrica"},{s:"VIA",l:"Viaduto"}];
const EE_OBRAS_ANDAMENTO=[
  {s:"LTJAN",l:"LT Janaúba"},
  {s:"SEJPJ",l:"Bays SE Janaúba e SE Presidente Juscelino"},
  {s:"SEJAN",l:"SE Janaúba"},
  {s:"SEPJU",l:"SE Presidente Juscelino"},
  {s:"LTNEC",l:"LT Nova Era Ceará 500kV"},
  {s:"LTNEC2",l:"LT Nova Era Ceará 230kV"},
  {s:"CEDIA",l:"CE Diana"},
  {s:"STETPO",l:"Sistema de Tratamento de Esgoto Três Pontas"},
];
const TT_EMIT=[{s:"AX",l:"Araxá"},{s:"CR",l:"CR Gontijo"},{s:"EL",l:"ELASTRI Engenharia"},{s:"FF",l:"Fundaff"},{s:"H5",l:"Head 5 Engenharia"},{s:"IP",l:"Irmãos Pelegrini"},{s:"MM",l:"Manoel Marchetti"},{s:"ZA",l:"Zago Assessoria"}];
const AAA_EST=[{s:"AER",l:"Aerogerador"},{s:"CAN",l:"Canteiro de Obras"},{s:"EBF",l:"Empréstimo e Bota-Fora"},{s:"EST",l:"Estradas e Acessos"},{s:"GER",l:"Geral"},{s:"MEM",l:"Montagem Elomecânica"},{s:"OEM",l:"Prédio O&M"},{s:"PLA",l:"Plataforma de Montagem"}];
const FFF_LOC=[{s:"ACC",l:"Acessos de Canteiro"},{s:"ACE",l:"Acessos Externos"},{s:"ACI",l:"Acessos Internos"},{s:"ACS",l:"Acessos de Subestação"},{s:"ACV",l:"Acessos Vicinal"},{s:"PSE",l:"Platô da Subestação"},{s:"XXX",l:"Parque/Torre (nº crescente)"}];

// BB Rev 26 — adicionado PET (Planos Específicos de Trabalho), removido PEX→PEX mantido
const BB_TIPOS=[{s:"APR",l:"Análise Preliminar de Risco"},{s:"AR",l:"Ata de reunião"},{s:"AZ",l:"Autorização de Compra/Pagamento"},{s:"CA",l:"Carta de Apresentação"},{s:"CAP",l:"Certificado de Aprovação Provisória"},{s:"CD",l:"Caderno Típico"},{s:"CE",l:"Correspondência Externa"},{s:"CG",l:"Cronograma"},{s:"CI",l:"Correspondência Interna"},{s:"CN",l:"Contrato"},{s:"CO",l:"Código"},{s:"CP",l:"Critérios de Projeto"},{s:"CQ",l:"Croqui"},{s:"CT",l:"Relatório de Controle Tecnológico"},{s:"DB",l:"Data Book"},{s:"DE",l:"Documentos externos"},{s:"DI",l:"Diagramas"},{s:"DL",l:"Documentação Legal"},{s:"ET",l:"Especificação Técnica"},{s:"FAC",l:"Ferramenta de Apoio de Contrato"},{s:"FAE",l:"Ferramenta de Apoio a Engenharia"},{s:"FAO",l:"Ficha de Análise de Ocorrência"},{s:"FBO",l:"Ficha de Boletim de Ocorrência"},{s:"FI",l:"Ficha de Inspeção"},{s:"FLC",l:"Ficha de Liberação de Concretagem"},{s:"FLF",l:"Ficha de Liberação de Fundação"},{s:"FLI",l:"Ficha de Liberação de Injeção"},{s:"FLP",l:"Ficha de Liberação de Projetados"},{s:"FPE",l:"Ficha de Processos Erosivos"},{s:"FU",l:"Fluxograma"},{s:"GRD",l:"Guia de Remessa de Documentos"},{s:"LC",l:"Lista de Construção"},{s:"LD",l:"Lista de Documentos"},{s:"LE",l:"Lista de Equipamentos"},{s:"LF",l:"Lista de Ferro"},{s:"LI",l:"Lista de Inspeção"},{s:"LM",l:"Lista de Materiais"},{s:"LP",l:"Lista de Presença"},{s:"LT",l:"Laudo Técnico"},{s:"LV",l:"Lista de Verificação"},{s:"MC",l:"Memória de Cálculo"},{s:"MD",l:"Memorial Descritivo"},{s:"MI",l:"Manual Interno"},{s:"ND",l:"Notificação de Desvio"},{s:"NS",l:"Nota de Serviço"},{s:"OC",l:"Ocorrências"},{s:"PD",l:"Parte Diária"},{s:"PET",l:"Planos Específicos de Trabalho"},{s:"PEX",l:"Plano Executivo"},{s:"PGQ",l:"Plano de Gestão de Qualidade"},{s:"PI",l:"Procedimento Interno"},{s:"PJ",l:"Desenhos/Projetos"},{s:"PL",l:"Planilha de Controle"},{s:"PLT",l:"Política Interna"},{s:"PM",l:"Planilha de Medição"},{s:"PQO",l:"Plano de Qualidade da Obra"},{s:"PR",l:"Lista de Projeto"},{s:"PT",l:"Plano de Inspeção e Testes"},{s:"QC",l:"Quadro de Cubação"},{s:"RAF",l:"Relatório de Acompanhamento Fotográfico"},{s:"RAT",l:"Relatório de Acompanhamento Topográfico"},{s:"RDO",l:"Relatório Diário de Obra"},{s:"RL",l:"Relatório"},{s:"RM",l:"Relatório Mensal"},{s:"RPPD",l:"Relatório Produção e Programação Diária"},{s:"RS",l:"Relatório Semanal"},{s:"SAP",l:"Solicitação de Alteração de Projeto"},{s:"TB",l:"Tabela"},{s:"TH",l:"Traçado Horizontal"}];

// CC Rev 26 — CTC→"Controle Tecnológico de Concreto", novo CTS, SA, GMG
const CC_ASSUNTOS=[{s:"0A",l:"Acabamentos / Cobertura / Alvenaria"},{s:"0B",l:"Concreto / Agregados / Formas"},{s:"0C",l:"Coordenação / Planejamento"},{s:"0E",l:"Estudos"},{s:"0F",l:"Infraestrutura / Condições de trabalho"},{s:"0G",l:"Geral"},{s:"0P",l:"Orçamentação / Proposta / Cronograma"},{s:"0T",l:"Topografia / Levantamentos / Geoprocessamento / Locação"},{s:"1E",l:"Elétrica / Instalações / Iluminação"},{s:"1G",l:"Geologia / Geotecnia"},{s:"1T",l:"Terraplenagem / Escavação Comum"},{s:"2D",l:"Documentação"},{s:"2T",l:"Escavação em Rocha Céu Aberto / Subterrânea"},{s:"3T",l:"Tratamento / Fundações"},{s:"4C",l:"Canteiro de Obras e Estruturas de Apoio"},{s:"A&S",l:"Atração & Seleção"},{s:"AB",l:"As Built"},{s:"AC",l:"Análise crítica"},{s:"AE",l:"Auditoria Externa"},{s:"AG",l:"Arranjo Geral"},{s:"AGS",l:"Água de Serviço"},{s:"AI",l:"Auditoria Interna"},{s:"AL",l:"Almoxarifado"},{s:"AM",l:"Armadura"},{s:"AP",l:"Alteração de Projeto"},{s:"ARQ",l:"Arquitetura"},{s:"ART",l:"Anotação de Responsabilidade Técnica"},{s:"AS",l:"Acessos / Pavimentação"},{s:"AT",l:"Aterramento"},{s:"C&E",l:"Clima & Endomarketing"},{s:"CC",l:"Cabo Condutor"},{s:"CDV",l:"Caixa Distribuidora de Vazão"},{s:"CER",l:"Cerca"},{s:"CF",l:"Casa de Força ou Casa de Comando"},{s:"CM",l:"Comissionamento"},{s:"CN",l:"Contratos"},{s:"CO",l:"Comunicado de Obra"},{s:"COC",l:"Comunicação Corporativa"},{s:"CRT",l:"Corte de Estais"},{s:"CS",l:"Chaves Seccionadoras"},{s:"CTC",l:"Controle Tecnológico de Concreto"},{s:"CTS",l:"Controle Tecnológico de Solo"},{s:"CU",l:"Custo"},{s:"DF",l:"Detalhamento de Formas"},{s:"DR",l:"Drenagem"},{s:"DRE",l:"Desmonte de Rocha com Uso de Explosivo"},{s:"DT",l:"Detalhamentos"},{s:"DV",l:"Desvio"},{s:"EA",l:"Ensaio de Resistência da Malha de Terra"},{s:"EC",l:"Ensaio de Compressão do Concreto"},{s:"ED",l:"Ensaio de Carregamento Dinâmico"},{s:"EE",l:"Ensaio de Prova de Carga Estática"},{s:"EEF",l:"Estação Elevatória Final"},{s:"EK",l:"Endomarketing"},{s:"EL",l:"Eletromecânica"},{s:"EM",l:"Estruturas Metálicas"},{s:"EN",l:"Engenharia"},{s:"ENC",l:"Escavação, Nivelamento e Concretagem"},{s:"EP",l:"Ensaio de Prova de Carga em Placa"},{s:"EQ",l:"Equipamentos"},{s:"ER",l:"Ensaio Resistividade"},{s:"ERA",l:"Emenda, Reparo ou Ancoragem"},{s:"ES",l:"Ensaio de Caracterização de Solos"},{s:"ESP",l:"Espaçadores e Amortecedores"},{s:"FM",l:"Formas"},{s:"FO",l:"Fibra Ótica"},{s:"FS",l:"Faseamento"},{s:"FT",l:"Faturamento"},{s:"FX",l:"Faixa de Servidão"},{s:"GC",l:"Grampeação de Cabos"},{s:"GE",l:"Geométrico"},{s:"GMG",l:"Grupos Motores Geradores"},{s:"GQ",l:"Gestão Qualidade"},{s:"GT",l:"Grauteamento"},{s:"HE",l:"Helicoidal"},{s:"HG",l:"Hidrologia / Hidráulica"},{s:"HS",l:"Hidrossanitário"},{s:"IA",l:"Inteligência Artificial"},{s:"IG",l:"Programa de Integridade"},{s:"IL",l:"Interligação"},{s:"IN",l:"Instrumentação"},{s:"IS",l:"Isoladores"},{s:"JD",l:"Jurídico / Contencioso"},{s:"JP",l:"Jumpers"},{s:"LC",l:"Lançamento de Cabo"},{s:"LF",l:"Lagoa Facultativa"},{s:"LOC",l:"Locação"},{s:"LS",l:"Leito de Secagem"},{s:"MA",l:"Meio Ambiente"},{s:"MM",l:"Manutenção Mecânica"},{s:"MR",l:"Medição de Resistência"},{s:"MT",l:"Materiais"},{s:"MTG",l:"Montagem e/ou Revisão de Torres"},{s:"NC",l:"Nivelamento de Cabos"},{s:"OV",l:"Ordem de Variação"},{s:"PA",l:"Para Raio"},{s:"PB",l:"Projeto Básico"},{s:"PC",l:"Postes de Concreto"},{s:"PD",l:"Pendências"},{s:"PE",l:"Peças Embutidas"},{s:"PEP",l:"Planta e Perfil"},{s:"PMR",l:"Pré-moldados"},{s:"PMT",l:"Pré Montagem de Torre"},{s:"PN",l:"Prospecção de Negócios"},{s:"PO",l:"Projeto Básico Otimizado e Consolidado"},{s:"PPI",l:"Projeto Preventivo Contra Incêndio"},{s:"PV",l:"Poço de Visita"},{s:"QG",l:"Queimador de Gás"},{s:"RC",l:"Recepção"},{s:"RE",l:"Responsabilidade Ética"},{s:"REA",l:"Reaterro"},{s:"RS",l:"Responsabilidade Social"},{s:"RT",l:"Relações Trabalhistas"},{s:"RV",l:"Revisão de Montagem de Torres"},{s:"SA",l:"Serviços Auxiliares"},{s:"SAO",l:"Separação de Água e Óleo"},{s:"SB",l:"Sustentabilidade"},{s:"SÇ",l:"Seções Transversais"},{s:"SC",l:"Sistema de Proteção Contra Vibrações Eólicas"},{s:"SD",l:"Sondagem"},{s:"SEC",l:"Seccionamento"},{s:"SF",l:"Serviços prestados / Portfólio"},{s:"SI",l:"Sindical"},{s:"SN",l:"Sinalização"},{s:"SO",l:"Saúde Ocupacional"},{s:"SP",l:"Segurança Patrimonial"},{s:"SS",l:"Serviços"},{s:"ST",l:"Segurança do Trabalho"},{s:"SUV",l:"Sanitização UV"},{s:"SV",l:"Supressão Vegetal"},{s:"TC",l:"Tenda Carpa"},{s:"TD",l:"Treinamento de Desenvolvimento"},{s:"TP",l:"Tratamento Preliminar"},{s:"TPT",l:"Tensão de Passo e Toque"},{s:"TV",l:"Travessias"},{s:"UB",l:"Urbanização"},{s:"VC",l:"Vias de Cabos"},{s:"VDR",l:"Vala de Disposição de Resíduos"},{s:"VI",l:"Vala de Interligação"}];

const ESTRUTURA_TIPO=[{s:"A",l:"Autoportante"},{s:"E",l:"Estaiada"}];
const FUND_TIPO=[{s:"BR",l:"Bloco ancorado em Rocha"},{s:"REA",l:"Reator"},{s:"S",l:"Sapata"},{s:"SPM",l:"Sapata Pré Moldado"},{s:"TA",l:"Tirante Ancorado em rocha – Haste de âncora"},{s:"TB",l:"Tubulão com Base"},{s:"TPM",l:"Tubulão Pré Moldado"},{s:"TR",l:"Tubulão Reto"},{s:"VL",l:"Viga L"}];

// Obras LT/SE que ativam complemento CC
const OBRAS_LT_SE_SIGLAS=["LTJAN","SEJPJ","SEJAN","SEPJU","LTNEC","LTNEC2","LT","SE"];

function revisaoInterna(seq){const n=Math.floor(seq/26),l=seq%26;return`${n}${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[l]}`;}

const inp={width:"100%",padding:"9px 12px",borderRadius:6,border:`1.5px solid ${C.cinzaBorda}`,background:C.branco,color:C.cinzaTexto,fontSize:13,boxSizing:"border-box",fontFamily:"inherit"};
const lbl={fontSize:11,fontWeight:700,color:C.cinzaEscuro,display:"block",marginBottom:4,textTransform:"uppercase",letterSpacing:.5};

function Field({label,note,children}){return(<div><label style={lbl}>{label}</label>{children}{note&&<p style={{fontSize:11,color:C.cinzaSecundario,margin:"3px 0 0"}}>{note}</p>}</div>);}
function Sel({label,name,value,onChange,options,note}){return(<Field label={label} note={note}><select name={name} value={value} onChange={onChange} style={inp}><option value="">Selecione...</option>{options.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}</select></Field>);}
function Btn({onClick,children,outline,disabled,style={}}){return(<button onClick={onClick} disabled={disabled} style={{background:outline?"transparent":C.azul,color:outline?C.azul:C.branco,border:`2px solid ${C.azul}`,borderRadius:6,padding:"10px 22px",fontSize:13,fontWeight:700,cursor:disabled?"not-allowed":"pointer",opacity:disabled?.6:1,...style}}>{children}</button>);}

function Header(){return(<div style={{background:C.azul,padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}><Logo/><span style={{fontSize:11,color:"rgba(255,255,255,.65)",letterSpacing:1,textTransform:"uppercase"}}>S3-PI-GQ-0001 · Rev. 26</span></div>);}

function Tabs({aba,setAba}){
  return(<div style={{display:"flex",borderBottom:`2px solid ${C.cinzaBorda}`,background:C.branco,padding:"0 1.5rem"}}>
    {[["gerar","Gerar Código"],["consultar","Consultar"],["referencia","Referência"]].map(([k,l])=>(
      <button key={k} onClick={()=>setAba(k)} style={{padding:"12px 18px",fontSize:13,fontWeight:aba===k?700:400,color:aba===k?C.azul:C.cinzaSecundario,background:"none",border:"none",borderBottom:aba===k?`3px solid ${C.azul}`:"3px solid transparent",cursor:"pointer",marginBottom:-2}}>{l}</button>
    ))}
  </div>);
}

// ── PÁGINA SUGESTÃO ───────────────────────────────────────────────────────────
function PaginaSugestao({onVoltar}){
  const DEST="georgia.rosa@elastri.com.br";
  const [form,setForm]=useState({nome:"",email:"",setor:"",tipo:"CC",descricao:"",sigla:"",motivo:""});
  const [etapa,setEtapa]=useState("form"); // "form" | "pronto"
  const [enviando,setEnviando]=useState(false);
  function upd(e){setForm(p=>({...p,[e.target.name]:e.target.value}));}

  const tipoLabel=form.tipo==="BB"?"BB – Tipo de Documento (item 5.2.3.5)":"CC – Assunto do Documento (item 5.2.3.6)";
  const dataHoje=new Date().toLocaleDateString("pt-BR");

  const assunto=`[Elastri] Solicitação de nova sigla ${form.tipo} – ${form.sigla||"a definir"}`;
  const corpo=[
    "SOLICITAÇÃO DE ATUALIZAÇÃO – S3-PI-GQ-0001",
    "Controle e Codificação de Documentos",
    "",
    `Colaborador: ${form.nome}`,

    `Setor / Obra: ${form.setor}`,
    `Data: ${dataHoje}`,
    "",
    `Tipo de sigla: ${tipoLabel}`,
    `Sigla sugerida: ${form.sigla||"não informada"}`,
    `Descrição: ${form.descricao}`,
    "",
    "Justificativa / Motivo:",
    form.motivo||"não informada",
    "",
    "---",
    "Enviado via Sistema de Codificação de Documentos – Elastri Engenharia",
  ].join("\n");

  function preparar(){
    if(!form.nome.trim()||!form.setor.trim()||!form.descricao.trim()){
      alert("Preencha os campos obrigatórios: Nome, Setor/Obra e Descrição.");return;
    }
    setEtapa("pronto");
  }

  function abrirOutlook(){
    const webUrl=`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(DEST)}&subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.open(webUrl,"_blank");
  }

  function copiar(){
    const tudo=`Para: ${DEST}\nAssunto: ${assunto}\n\n${corpo}`;
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(tudo)
        .then(()=>alert("✅ Informações copiadas!\n\nCole no corpo do e-mail e envie para:\n"+DEST))
        .catch(()=>copiarFallback(tudo));
    } else {
      copiarFallback(tudo);
    }
  }
  function copiarFallback(texto){
    const ta=document.createElement("textarea");
    ta.value=texto;
    ta.style.position="fixed";
    ta.style.top="0";
    ta.style.left="0";
    ta.style.opacity="0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try{
      document.execCommand("copy");
      alert("✅ Informações copiadas!\n\nCole no corpo do e-mail e envie para:\n"+DEST);
    }catch(e){
      alert("Não foi possível copiar automaticamente. Selecione e copie o texto da prévia manualmente.");
    }
    document.body.removeChild(ta);
  }

  if(etapa==="pronto") return(
    <div style={{padding:"1.5rem"}}>
      <button onClick={()=>setEtapa("form")} style={{background:"none",border:"none",color:C.azul,cursor:"pointer",fontSize:13,fontWeight:700,padding:0,marginBottom:16}}>← Voltar ao formulário</button>
      <div style={{borderLeft:`4px solid ${C.verde}`,paddingLeft:14,marginBottom:20}}>
        <h2 style={{fontSize:16,fontWeight:700,color:C.cinzaTexto,margin:"0 0 4px"}}>Solicitação pronta para envio</h2>
        <p style={{fontSize:12,color:C.cinzaSecundario,margin:0}}>Escolha como deseja enviar o e-mail para <strong>{DEST}</strong></p>
      </div>

      {/* Preview do e-mail */}
      <div style={{background:C.cinzaBg,border:`1px solid ${C.cinzaBorda}`,borderRadius:8,padding:"12px 14px",marginBottom:20}}>
        <p style={{fontSize:11,fontWeight:700,color:C.cinzaEscuro,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:.5}}>Prévia do e-mail</p>
        <p style={{fontSize:12,margin:"0 0 2px"}}><strong>Para:</strong> {DEST}</p>
        <p style={{fontSize:12,margin:"0 0 8px"}}><strong>Assunto:</strong> {assunto}</p>
        <pre style={{fontSize:11,color:C.cinzaTexto,whiteSpace:"pre-wrap",margin:0,lineHeight:1.6,fontFamily:"inherit"}}>{corpo}</pre>
      </div>

      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        <button onClick={abrirOutlook} style={{background:C.azul,color:C.branco,border:"none",borderRadius:8,padding:"14px 20px",fontSize:14,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
          <span style={{fontSize:18}}>📧</span> Enviar via Outlook
        </button>
        <button onClick={copiar} style={{background:C.branco,color:C.azul,border:`2px solid ${C.azul}`,borderRadius:8,padding:"12px 20px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
          <span style={{fontSize:16}}>📋</span> Copiar informações
        </button>
        <button onClick={onVoltar} style={{background:"none",border:"none",color:C.cinzaSecundario,cursor:"pointer",fontSize:12,padding:"6px 0",textAlign:"center"}}>← Voltar ao sistema</button>
      </div>
    </div>
  );

  return(<div style={{padding:"1.5rem"}}>
    <button onClick={onVoltar} style={{background:"none",border:"none",color:C.azul,cursor:"pointer",fontSize:13,fontWeight:700,padding:0,marginBottom:16}}>← Voltar</button>
    <div style={{borderLeft:`4px solid ${C.azul}`,paddingLeft:14,marginBottom:20}}>
      <h2 style={{fontSize:17,fontWeight:700,color:C.cinzaTexto,margin:"0 0 4px"}}>Solicitação de nova sigla</h2>
      <p style={{fontSize:12,color:C.cinzaSecundario,margin:0}}>Pedido de atualização do procedimento <strong>S3-PI-GQ-0001</strong> · item 5.2.3.5 (BB) ou 5.2.3.6 (CC)</p>
    </div>
    <div style={{background:C.amareloClaro,border:`1px solid ${C.amarelo}`,borderRadius:8,padding:"10px 14px",marginBottom:20,fontSize:12,color:"#6b5200"}}>
      ⚠ Preencha o formulário abaixo para solicitar a criação de uma nova sigla. Ao finalizar, você poderá enviar a solicitação diretamente por e-mail via Outlook.
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      <Field label="Nome completo *"><input name="nome" value={form.nome} onChange={upd} placeholder="Ex: João da Silva" style={inp}/></Field>

      <Field label="Setor / Obra *"><input name="setor" value={form.setor} onChange={upd} placeholder="Ex: S3 – Sustentabilidade / LTJAN" style={inp}/></Field>
      <Field label="Tipo de sigla que falta *">
        <select name="tipo" value={form.tipo} onChange={upd} style={inp}>
          <option value="BB">BB – Tipo de Documento (5.2.3.5)</option>
          <option value="CC">CC – Assunto do Documento (5.2.3.6)</option>
        </select>
      </Field>
      <div style={{gridColumn:"1/-1"}}>
        <Field label="Descrição do assunto / tipo de documento *" note="Descreva com clareza o que este novo tipo/assunto representa.">
          <textarea name="descricao" value={form.descricao} onChange={upd} placeholder="Ex: Documentos relacionados a controle de qualidade de cabos condutores" rows={3} style={{...inp,resize:"vertical"}}/>
        </Field>
      </div>
      <Field label="Sigla sugerida" note="2 a 4 letras.">
        <input name="sigla" value={form.sigla} onChange={upd} placeholder="Ex: QC" style={{...inp,maxWidth:120}} maxLength={4}/>
      </Field>
      <div style={{gridColumn:"1/-1"}}>
        <Field label="Justificativa">
          <textarea name="motivo" value={form.motivo} onChange={upd} placeholder="Em quais documentos seria usada? Por que é necessária?" rows={3} style={{...inp,resize:"vertical"}}/>
        </Field>
      </div>
    </div>
    <div style={{display:"flex",gap:10,marginTop:20,alignItems:"center"}}>
      <Btn onClick={preparar}>Continuar →</Btn>
      <Btn onClick={onVoltar} outline>Cancelar</Btn>
    </div>
    <p style={{fontSize:11,color:C.cinzaSecundario,marginTop:8}}>* Campos obrigatórios · Destinatário: <strong>{DEST}</strong></p>
  </div>);
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App(){
  const [abaTela,setAbaTela]=useState("gerar");
  const [paginaSugestao,setPaginaSugestao]=useState(false);
  const [tipo,setTipo]=useState("gestao");
  const [f,setF]=useState({ee:"",tt:"",aaa:"",fff:"",fffCustom:"",gg:"",bb:"",cc:"",dddd:"0001",revisavel:"sim",rr:"00",aa:"",estrutTipo:"",fundTipo:"",titulo:"",faseRevisao:"final",revInternaSeq:0});
  const [ccPedido,setCcPedido]=useState(false);
  const [resultado,setResultado]=useState(null);
  const [erro,setErro]=useState("");
  const [historico,setHistorico]=useState([]);
  const [busca,setBusca]=useState("");
  const [buscaRef,setBuscaRef]=useState("");

  const anoAtual=String(new Date().getFullYear()).slice(-2);
  function upd(e){setF(p=>({...p,[e.target.name]:e.target.value}));setResultado(null);setErro("");}

  const [mostrarCompl,setMostrarCompl]=useState(false);
  // EE selecionado
  const eeVal=f.ee;
  // Obra é LT ou SE (para complemento CC)
  const isLTSE=OBRAS_LT_SE_SIGLAS.some(s=>eeVal===s||eeVal.startsWith("LT")||eeVal.startsWith("SE"));
  const ccPermiteCompl=isLTSE&&f.cc&&!ccPedido&&mostrarCompl;

  function handleCC(e){
    if(e.target.value==="__pedido__"){setCcPedido(true);setF(p=>({...p,cc:"",estrutTipo:"",fundTipo:""}));}
    else{setCcPedido(false);setF(p=>({...p,cc:e.target.value,estrutTipo:"",fundTipo:""}));}
    setResultado(null);setErro("");
  }
  function buildCC(){
    if(!f.cc)return"";
    if(ccPermiteCompl&&f.estrutTipo&&f.fundTipo)return`${f.cc}.${f.estrutTipo}.${f.fundTipo}`;
    return f.cc;
  }
  function buildCodigo(){
    const seq=String(f.dddd).padStart(4,"0");
    const suf=f.faseRevisao==="interna"?revisaoInterna(f.revInternaSeq):(f.revisavel==="sim"?String(f.rr).padStart(2,"0"):(f.aa||anoAtual));
    const cc=buildCC();
    if(tipo==="tecnico"){
      const gg=f.gg?`-${String(f.gg).padStart(2,"0")}`:""
      const fff=f.fff==="XXX"?(f.fffCustom||"XXX"):f.fff;
      return`${eeVal}-${f.tt}-${f.aaa}-${fff}${gg}-${f.bb}-${cc}-${seq}-${suf}`;
    }
    return`${eeVal}-${f.bb}-${cc}-${seq}-${suf}`;
  }
  function validar(){
    if(!eeVal)return"Selecione o campo EE.";
    if(tipo==="tecnico"){if(!f.tt)return"Selecione o emitente TT.";if(!f.aaa)return"Selecione a estrutura AAA.";if(!f.fff)return"Selecione o local FFF.";if(f.fff==="XXX"&&!f.fffCustom)return"Informe o número do parque/torre.";}
    if(!f.bb)return"Selecione o tipo de documento BB.";
    if(!f.cc)return"Selecione o assunto CC.";
                      if(mostrarCompl&&isLTSE&&(!f.estrutTipo||!f.fundTipo))return"Você abriu o complemento LT/SE: informe estrutura e fundação ou remova o complemento.";
    const d=parseInt(f.dddd);if(isNaN(d)||d<1||d>9999)return"Sequência DDDD deve ser entre 0001 e 9999.";
    return null;
  }
  function gerar(){const err=validar();if(err){setErro(err);return;}const cod=buildCodigo();const reg={codigo:cod,tipo,titulo:f.titulo,data:new Date().toLocaleDateString("pt-BR"),fase:f.faseRevisao,ee:eeVal,bb:f.bb,cc:buildCC()};setHistorico(h=>[reg,...h]);setResultado(reg);setErro("");}

  const filtrado=historico.filter(d=>d.codigo.toLowerCase().includes(busca.toLowerCase())||(d.titulo||"").toLowerCase().includes(busca.toLowerCase()));
  const refSections=[
    {titulo:"EE – Departamentos internos",items:EE_DEPT},
    {titulo:"EE – Tipos de obra (genérico)",items:EE_TIPOS},
    {titulo:"EE – Obras em andamento (comunicado interno)",items:EE_OBRAS_ANDAMENTO},
    {titulo:"TT – Emitente (doc. técnico)",items:TT_EMIT},
    {titulo:"AAA – Estrutura (doc. técnico)",items:AAA_EST},
    {titulo:"FFF – Local na obra (doc. técnico)",items:FFF_LOC},
    {titulo:"BB – Tipo de documento",items:BB_TIPOS},
    {titulo:"CC – Assunto do documento",items:CC_ASSUNTOS},
    {titulo:"Complemento CC – Tipo de estrutura (LT/SE)",items:ESTRUTURA_TIPO},
    {titulo:"Complemento CC – Tipo de fundação (LT/SE)",items:FUND_TIPO},
  ];
  const refFilt=buscaRef?refSections.map(s=>({...s,items:s.items.filter(o=>o.s.toLowerCase().includes(buscaRef.toLowerCase())||o.l.toLowerCase().includes(buscaRef.toLowerCase()))})).filter(s=>s.items.length>0):refSections;

  if(paginaSugestao)return(<div style={{fontFamily:"Arial,sans-serif",background:C.cinzaBg,minHeight:"100vh"}}><Header/><div style={{maxWidth:700,margin:"0 auto",padding:"1.5rem 1rem"}}><div style={{background:C.branco,borderRadius:12,border:`1px solid ${C.cinzaBorda}`}}><PaginaSugestao onVoltar={()=>setPaginaSugestao(false)}/></div></div></div>);

  return(
    <div style={{fontFamily:"Arial,sans-serif",background:C.cinzaBg,minHeight:"100vh"}}>
      <Header/>
      <div style={{maxWidth:760,margin:"0 auto",padding:"1.5rem 1rem"}}>
        <div style={{background:C.branco,borderRadius:12,border:`1px solid ${C.cinzaBorda}`,overflow:"hidden"}}>
          <Tabs aba={abaTela} setAba={setAbaTela}/>
          <div style={{padding:"1.5rem"}}>

            {/* ── GERAR ── */}
            {abaTela==="gerar"&&(<div>
              <p style={{...lbl,marginBottom:8}}>Tipo de documento</p>
              <div style={{display:"flex",gap:10,marginBottom:20}}>
                {[["gestao","📋 Gestão","EE · BB · CC · DDDD · RR/AA"],["tecnico","📐 Técnico","EE · TT · AAA · FFF · GG · BB · CC · DDDD · RR/AA"]].map(([v,l,fmt])=>(
                  <button key={v} onClick={()=>{setTipo(v);setResultado(null);setErro("");}} style={{flex:1,padding:"10px 8px",borderRadius:8,border:tipo===v?`2px solid ${C.azul}`:`1.5px solid ${C.cinzaBorda}`,background:tipo===v?C.azulClaro:C.branco,color:tipo===v?C.azul:C.cinzaTexto,fontSize:13,cursor:"pointer",fontWeight:tipo===v?700:400,lineHeight:1.5}}>
                    {l}<br/><span style={{fontSize:10,opacity:.6,fontWeight:400}}>{fmt}</span>
                  </button>
                ))}
              </div>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                {/* EE */}
                <div style={{gridColumn:"1/-1"}}>
                  <Field label="EE – Empreendimento ou departamento">
                    <select name="ee" value={f.ee} onChange={upd} style={inp}>
                      <option value="">Selecione...</option>
                      <optgroup label="🏢 Departamentos internos">{EE_DEPT.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}</optgroup>
                      <optgroup label="🏗️ Obras em andamento (comunicado interno)">{EE_OBRAS_ANDAMENTO.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}</optgroup>
                      <optgroup label="📋 Tipos de obra (genérico)">{EE_TIPOS.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}</optgroup>
                    </select>
                    {eeVal&&OBRAS_LT_SE_SIGLAS.some(s=>eeVal===s)&&(
                      <p style={{fontSize:11,color:"#1a4ea0",margin:"4px 0 0",background:"#e8eeff",padding:"4px 8px",borderRadius:4}}>ℹ️ Esta é uma obra LT/SE — o campo CC poderá ter complemento de estrutura e fundação.</p>
                    )}
                  </Field>
                </div>

                {tipo==="tecnico"&&(<>
                  <Sel label="TT – Emitente" name="tt" value={f.tt} onChange={upd} options={TT_EMIT}/>
                  <Sel label="AAA – Estrutura" name="aaa" value={f.aaa} onChange={upd} options={AAA_EST}/>
                  <Field label="FFF – Local na obra">
                    <select name="fff" value={f.fff} onChange={upd} style={inp}>
                      <option value="">Selecione...</option>
                      {FFF_LOC.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}
                    </select>
                    {f.fff==="XXX"&&<input name="fffCustom" value={f.fffCustom} onChange={upd} placeholder="Número do parque/torre (ex: 015)" style={{...inp,marginTop:6}}/>}
                  </Field>
                  <Field label="GG – Elemento de referência" note="Base, acesso, poste, skid ou perna de torre (opcional).">
                    <input name="gg" value={f.gg} onChange={upd} placeholder="Ex: 01, 080" style={inp}/>
                  </Field>
                </>)}

                <div style={{gridColumn:"1/-1"}}>
                  <Sel label="BB – Tipo de documento" name="bb" value={f.bb} onChange={upd} options={BB_TIPOS}/>
                </div>

                {/* CC */}
                <div style={{gridColumn:"1/-1"}}>
                  <Field label="CC – Assunto do documento">
                    <select value={ccPedido?"__pedido__":f.cc} onChange={handleCC} style={inp}>
                      <option value="">Selecione...</option>
                      {CC_ASSUNTOS.map(o=><option key={o.s} value={o.s}>{o.s} – {o.l}</option>)}
                      <option value="__pedido__">⚠ Nenhuma sigla se aplica – solicitar atualização</option>
                    </select>
                  </Field>
                </div>

                {/* Complemento LT/SE — opcional */}
                {isLTSE&&f.cc&&!ccPedido&&(
                  <div style={{gridColumn:"1/-1"}}>
                    {!mostrarCompl?(
                      <button onClick={()=>setMostrarCompl(true)} style={{background:"none",border:`1.5px dashed ${C.azul}`,borderRadius:7,padding:"7px 14px",fontSize:12,color:C.azul,cursor:"pointer",fontWeight:600}}>
                        + Adicionar complemento de estrutura/fundação (LT/SE)
                      </button>
                    ):(
                      <div style={{background:C.azulClaro,border:`1px solid ${C.azul}33`,borderRadius:10,padding:"1rem"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                          <p style={{fontSize:12,fontWeight:700,color:C.azul,margin:0}}>Complemento CC — LT/SE · item 5.2.3.6</p>
                          <button onClick={()=>{setMostrarCompl(false);setF(p=>({...p,estrutTipo:"",fundTipo:""}));}} style={{background:"none",border:"none",color:C.cinzaEscuro,cursor:"pointer",fontSize:12}}>✕ remover</button>
                        </div>
                        <p style={{fontSize:11,color:C.cinzaSecundario,margin:"0 0 12px"}}>O assunto CC pode ser complementado com tipo de estrutura e fundação, separados por ponto. Ex: <strong style={{fontFamily:"monospace"}}>2T.E.TB</strong></p>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                          <Sel label="Tipo de estrutura" name="estrutTipo" value={f.estrutTipo} onChange={upd} options={ESTRUTURA_TIPO}/>
                          <Sel label="Tipo de fundação" name="fundTipo" value={f.fundTipo} onChange={upd} options={FUND_TIPO}/>
                        </div>
                        {f.estrutTipo&&f.fundTipo&&(
                          <p style={{fontSize:12,margin:"10px 0 0",color:C.azul,fontFamily:"monospace",fontWeight:700}}>CC resultante: {f.cc}.{f.estrutTipo}.{f.fundTipo}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* DDDD + Revisável */}
                <div>
                  <Field label="DDDD – Sequência numérica" note="0001 a 9999. Treinamentos: integração 0001+, específicos 1001+.">
                    <input name="dddd" value={f.dddd} onChange={upd} style={inp} maxLength={4}/>
                  </Field>
                </div>
                <div>
                  <Field label="Passível de revisão?">
                    <select name="revisavel" value={f.revisavel} onChange={upd} style={inp}>
                      <option value="sim">Sim – usar RR (revisão numérica)</option>
                      <option value="nao">Não – usar AA (ano) · RDO, atas, ocorrências…</option>
                    </select>
                  </Field>
                </div>

                {f.revisavel==="sim"&&(
                  <div style={{gridColumn:"1/-1"}}>
                    <p style={{...lbl,marginBottom:8}}>Fase do documento</p>
                    <div style={{display:"flex",gap:8,marginBottom:10}}>
                      {[["interna","🔄 Revisão interna (0A, 0B…)"],["final","✅ Versão final aprovada (00, 01…)"]].map(([v,l])=>(
                        <button key={v} onClick={()=>{setF(p=>({...p,faseRevisao:v}));setResultado(null);}} style={{flex:1,padding:"8px",borderRadius:7,border:f.faseRevisao===v?`2px solid ${C.azul}`:`1.5px solid ${C.cinzaBorda}`,background:f.faseRevisao===v?C.azulClaro:C.branco,color:f.faseRevisao===v?C.azul:C.cinzaTexto,fontSize:12,cursor:"pointer",fontWeight:f.faseRevisao===v?700:400}}>
                          {l}
                        </button>
                      ))}
                    </div>
                    {f.faseRevisao==="interna"&&(
                      <div style={{display:"flex",alignItems:"center",gap:10,background:C.amareloClaro,border:`1px solid ${C.amarelo}`,borderRadius:7,padding:"8px 12px",flexWrap:"wrap"}}>
                        <span style={{fontSize:12,color:"#6b5200"}}>Revisão interna atual: <strong style={{fontFamily:"monospace"}}>{revisaoInterna(f.revInternaSeq)}</strong></span>
                        <button onClick={()=>{setF(p=>({...p,revInternaSeq:p.revInternaSeq+1}));setResultado(null);}} style={{fontSize:11,padding:"3px 10px",borderRadius:5,border:`1px solid #d4a800`,background:"#fde68a",cursor:"pointer",fontWeight:600}}>Avançar →</button>
                        <button onClick={()=>{setF(p=>({...p,faseRevisao:"final",rr:"01"}));setResultado(null);}} style={{fontSize:11,padding:"3px 10px",borderRadius:5,border:`1px solid ${C.verde}`,background:C.verdeClaro,cursor:"pointer",fontWeight:600,color:"#166534"}}>Aprovar ✓</button>
                      </div>
                    )}
                    {f.faseRevisao==="final"&&(<div style={{maxWidth:160,marginTop:6}}><Field label="RR – Nº revisão (00 = emissão inicial)"><input name="rr" value={f.rr} onChange={upd} style={inp} maxLength={2}/></Field></div>)}
                  </div>
                )}
                {f.revisavel==="nao"&&(<div style={{maxWidth:160}}><Field label="AA – Últimos 2 dígitos do ano"><input name="aa" value={f.aa} onChange={upd} placeholder={anoAtual} style={inp} maxLength={2}/></Field></div>)}

                <div style={{gridColumn:"1/-1",borderTop:`1px solid ${C.cinzaBorda}`,paddingTop:14,marginTop:4}}>
                  <Field label="Título do documento (opcional)">
                    <input name="titulo" value={f.titulo} onChange={upd} placeholder="Ex: Procedimento de Segurança do Trabalho" style={inp}/>
                  </Field>
                </div>
              </div>

              {erro&&<p style={{fontSize:13,color:C.vermelho,marginTop:12,background:C.vermelhoClaro,padding:"8px 12px",borderRadius:6}}>{erro}</p>}
              {!ccPedido&&<div style={{marginTop:16}}><Btn onClick={gerar}>Gerar código</Btn></div>}

              {ccPedido&&(
                <div style={{marginTop:16,background:C.amareloClaro,border:`1px solid ${C.amarelo}`,borderRadius:10,padding:"1rem 1.1rem"}}>
                  <p style={{fontSize:13,fontWeight:700,color:"#6b5200",margin:"0 0 4px"}}>⚠ Sigla CC não encontrada no procedimento</p>
                  <p style={{fontSize:12,color:"#92400e",margin:"0 0 12px"}}>É necessário solicitar a inclusão de nova sigla no item 5.2.3.6 do procedimento S3-PI-GQ-0001.</p>
                  <Btn onClick={()=>setPaginaSugestao(true)}>Solicitar inclusão de nova sigla →</Btn>
                </div>
              )}

              {resultado&&(
                <div style={{marginTop:18,background:`linear-gradient(135deg,${C.azulClaro},#f0f9ff)`,border:`2px solid ${C.azul}44`,borderRadius:12,padding:"1.1rem 1.25rem"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:11,fontWeight:700,color:C.azul,textTransform:"uppercase",letterSpacing:.5}}>Código gerado</span>
                    <span style={{fontSize:11,padding:"2px 10px",borderRadius:99,background:resultado.fase==="interna"?C.amareloClaro:C.verdeClaro,color:resultado.fase==="interna"?"#6b5200":"#166534",fontWeight:700}}>{resultado.fase==="interna"?"Revisão interna":"Aprovado"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:14,flexWrap:"wrap"}}>
                    <p style={{fontSize:20,fontWeight:700,letterSpacing:2,color:C.azul,margin:0,wordBreak:"break-all",fontFamily:"monospace"}}>{resultado.codigo}</p>
                    {resultado.titulo&&<p style={{fontSize:13,color:C.cinzaSecundario,margin:0}}>— {resultado.titulo}</p>}
                  </div>
                  {resultado.fase==="interna"&&<p style={{fontSize:11,color:"#92400e",marginTop:8,borderTop:`1px solid ${C.amarelo}`,paddingTop:6}}>⚠ Documentos em revisão interna (sufixo alfanumérico) não são válidos para uso. Somente versões com sufixo numérico aprovado (00, 01…) podem ser utilizadas.</p>}
                </div>
              )}

              <div style={{marginTop:28,borderTop:`1px solid ${C.cinzaBorda}`,paddingTop:18,textAlign:"center"}}>
                <button onClick={()=>setPaginaSugestao(true)} style={{background:"none",border:`2px solid ${C.azul}`,borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:700,cursor:"pointer",color:C.azul}}>
                  💡 Não encontrei um tipo de documento / assunto que me satisfaça
                </button>
              </div>
            </div>)}

            {/* ── CONSULTAR ──

              {resultado&&(
                <div style={{marginTop:18,background:`linear-gradient(135deg,${C.azulClaro},#f0f9ff)`,border:`2px solid ${C.azul}44`,borderRadius:12,padding:"1.1rem 1.25rem"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:11,fontWeight:700,color:C.azul,textTransform:"uppercase",letterSpacing:.5}}>Código gerado</span>
                    <span style={{fontSize:11,padding:"2px 10px",borderRadius:99,background:resultado.fase==="interna"?C.amareloClaro:C.verdeClaro,color:resultado.fase==="interna"?"#6b5200":"#166534",fontWeight:700}}>{resultado.fase==="interna"?"Revisão interna":"Aprovado"}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:14,flexWrap:"wrap"}}>
                    <p style={{fontSize:20,fontWeight:700,letterSpacing:2,color:C.azul,margin:0,wordBreak:"break-all",fontFamily:"monospace"}}>{resultado.codigo}</p>
                    {resultado.titulo&&<p style={{fontSize:13,color:C.cinzaSecundario,margin:0}}>— {resultado.titulo}</p>}
                  </div>
                  {resultado.fase==="interna"&&<p style={{fontSize:11,color:"#92400e",marginTop:8,borderTop:`1px solid ${C.amarelo}`,paddingTop:6}}>⚠ Documentos em revisão interna (sufixo alfanumérico) não são válidos para uso. Somente versões com sufixo numérico aprovado (00, 01…) podem ser utilizadas.</p>}
                </div>
              )}

              <div style={{marginTop:28,borderTop:`1px solid ${C.cinzaBorda}`,paddingTop:18,textAlign:"center"}}>
                <button onClick={()=>setPaginaSugestao(true)} style={{background:"none",border:`2px solid ${C.azul}`,borderRadius:8,padding:"10px 22px",fontSize:13,fontWeight:700,cursor:"pointer",color:C.azul}}>
                  💡 Não encontrei um tipo de documento / assunto que me satisfaça
                </button>
              </div>
            </div>)}

            {/* ── CONSULTAR ── */}
            {abaTela==="consultar"&&(<div>
              <input value={busca} onChange={e=>setBusca(e.target.value)} placeholder="Buscar por código ou título..." style={{...inp,marginBottom:16}}/>
              {filtrado.length===0
                ?<div style={{textAlign:"center",padding:"3rem 0",color:C.cinzaEscuro}}><div style={{fontSize:32,marginBottom:8}}>📄</div><p style={{fontSize:14,margin:0}}>Nenhum documento registrado.</p><p style={{fontSize:12,margin:"4px 0 0",color:C.cinzaSecundario}}>Gere um código para ele aparecer aqui.</p></div>
                :filtrado.map((d,i)=>(<div key={i} style={{background:C.branco,borderRadius:10,border:`1px solid ${C.cinzaBorda}`,padding:"0.75rem 1rem",marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                    <span style={{fontWeight:700,fontSize:15,letterSpacing:1.5,color:C.azul,fontFamily:"monospace"}}>{d.codigo}</span>
                    <div style={{display:"flex",gap:6,alignItems:"center"}}>
                      <span style={{fontSize:10,padding:"2px 8px",borderRadius:99,background:d.fase==="interna"?C.amareloClaro:C.verdeClaro,color:d.fase==="interna"?"#6b5200":"#166534",fontWeight:700}}>{d.fase==="interna"?"Revisão interna":"Aprovado"}</span>
                      <span style={{fontSize:11,color:C.cinzaSecundario}}>{d.data}</span>
                    </div>
                  </div>
                  {d.titulo&&<p style={{fontSize:13,color:C.cinzaTexto,margin:"2px 0 6px"}}>{d.titulo}</p>}
                  <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                    {[["EE",d.ee],["BB",d.bb],["CC",d.cc||"—"],["Tipo",d.tipo==="tecnico"?"Técnico":"Gestão"]].map(([k,v])=>(
                      <span key={k} style={{fontSize:11,color:C.cinzaSecundario}}><strong style={{color:C.cinzaTexto}}>{k}:</strong> {v}</span>
                    ))}
                  </div>
                </div>))
              }
            </div>)}

            {/* ── REFERÊNCIA ── */}
            {abaTela==="referencia"&&(<div>
              <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:14,padding:"10px 14px",background:C.azulClaro,borderRadius:8,fontSize:12,color:C.azul}}>
                <span>📋 <strong>Gestão:</strong> EE-BB-CC-DDDD-RR ou AA</span>
                <span>📐 <strong>Técnico:</strong> EE-TT-AAA-FFF(-GG)-BB-CC-DDDD-RR ou AA</span>
                <span>🔄 <strong>Revisão interna:</strong> 0A, 0B… &nbsp; ✅ <strong>Aprovado:</strong> 00, 01…</span>
              </div>
              <div style={{background:"#fffbeb",border:`1px solid ${C.amarelo}`,borderRadius:8,padding:"10px 14px",marginBottom:14,fontSize:12,color:"#6b5200"}}>
                <strong>LT/SE:</strong> O campo CC pode ser complementado com tipo de estrutura e fundação separados por ponto. Ex: <span style={{fontFamily:"monospace",fontWeight:700}}>2T.E.TB</span> (Escavação em Rocha · Estaiada · Tubulão com Base)
              </div>
              <input value={buscaRef} onChange={e=>setBuscaRef(e.target.value)} placeholder="Filtrar siglas..." style={{...inp,marginBottom:16}}/>
              {refFilt.map(({titulo,items})=>(
                <div key={titulo} style={{marginBottom:18}}>
                  <p style={{fontSize:11,fontWeight:700,color:C.azul,margin:"0 0 6px",textTransform:"uppercase",letterSpacing:.5,borderBottom:`2px solid ${C.azul}`,paddingBottom:4}}>{titulo}</p>
                  <div style={{display:"grid",gridTemplateColumns:items.length>15?"repeat(auto-fill,minmax(240px,1fr))":items.length>6?"1fr 1fr":"1fr",gap:"2px 16px"}}>
                    {items.map(o=>(<div key={o.s} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${C.cinzaBorda}`,fontSize:12}}>
                      <span style={{color:C.cinzaTexto}}>{o.l}</span>
                      <span style={{fontWeight:700,color:C.azul,marginLeft:8,whiteSpace:"nowrap",fontFamily:"monospace"}}>{o.s}</span>
                    </div>))}
                  </div>
                </div>
              ))}
              <div style={{marginTop:8,padding:"12px 14px",background:C.cinzaBg,borderRadius:8,border:`1px solid ${C.cinzaBorda}`}}>
                <p style={{fontSize:12,fontWeight:700,color:C.cinzaTexto,margin:"0 0 6px"}}>Exemplos oficiais — S3-PI-GQ-0001 · Rev. 26</p>
                {["LTANN-AX-GER-080-00-DE-EM-0001-00 → Projeto de Estrutura Metálica da Torre 080 da Araxá","UFVASL-MA-GER-015-00-RL-SD-0001-00 → Relatório de Sondagem no parque 15","S3-PI-MA-0001-00 → Procedimento interno de Meio Ambiente","LTPTG-PI-ST-0001-00 → Procedimento interno de Segurança do Trabalho","LTTNG-LV-2T.E.TB-0001-00 → Lista de Verificação Torre Estaiada – Tubulão com base","LTPTG-LV-0B.A.TR-0001-00 → Lista de Verificação de Concretagem Torre Autoportante – Tubulão reto","CESDA-ZA-EST-ACI-02-RL-ES-0002-00 → Relatório de Ensaio de Solos no Acesso Interno 02 da Zago"].map(e=>(
                  <p key={e} style={{fontSize:11,color:C.cinzaSecundario,margin:"3px 0",fontFamily:"monospace"}}>{e}</p>
                ))}
              </div>
            </div>)}
          </div>
        </div>
        <p style={{fontSize:11,color:C.cinzaSecundario,textAlign:"center",marginTop:12}}>S3-PI-GQ-0001 · Revisão 26 · 19/06/2026 · Elastri Engenharia S.A.</p>
      </div>
    </div>
  );
}
