var Fields_models = [
  {
    name: "Crisis Binary",
    models: [
      {
        name: "bert_base_cased",
      },
      {
        name: "flaubert_lstm",
      },
      {
        name: "flaubert_CNN",
      },
      {
        name: "flaubert_Adapted_LM",
      },
      {
        name: "Flaubert_Multitask",
      },
      {
        name: "Camembert",
      },
    ],
  },
  {
    name: "Crisis Three classes",
    models: [
      {
        name: "bert_base_cased",
      },
      {
        name: "flaubert_base_cased",
      },
    ],
  },
  {
    name: "psycho_sentiment",
    models: [
      {
        name: "flaubert_adapted_features",
      },
      {
        name: "flaubert_base_cased",
      },
    ],
  },
];

export default Fields_models;
