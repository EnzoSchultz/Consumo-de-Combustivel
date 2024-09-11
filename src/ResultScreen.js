import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect, Text as SvgText, Path } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const barWidth = 60;
const barSpacing = 20;
const classifications = ["1", "2", "3", "4", "5"];
const barHeight = 220;

const ResultScreen = ({ route }) => {
  const { media } = route.params;

  let classificacao = "";
  let progresso = 0;
  let classificacaoLabel = "";
  const barColors = ["#4caf50", "#81c784", "#ffeb3b", "#ff9800", "#f44336"];

  if (media >= 12) {
    classificacao = "1";
    progresso = 1;
    classificacaoLabel = "Excelente";
  } else if (media >= 10) {
    classificacao = "2";
    progresso = 0.8;
    classificacaoLabel = "Muito Bom";
  } else if (media >= 8) {
    classificacao = "3";
    progresso = 0.6;
    classificacaoLabel = "Bom";
  } else if (media >= 4) {
    classificacao = "4";
    progresso = 0.4;
    classificacaoLabel = "Regular";
  } else {
    classificacao = "5";
    progresso = 0.2;
    classificacaoLabel = "Ruim";
  }


  const totalWidth = (barWidth + barSpacing) * classifications.length - barSpacing;
  const centerOffset = (screenWidth - totalWidth) / 2;

  const classificationIndex = classifications.indexOf(classificacao);
  const arrowX = centerOffset + (barWidth + barSpacing) * classificationIndex + barWidth / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {classificacao}</Text>
      <View style={styles.chartContainer}>
        <Svg height={barHeight + 60} width={screenWidth}>
          {/* Barras */}
          {classifications.map((label, index) => (
            <React.Fragment key={label}>
              <Rect
                x={centerOffset + (barWidth + barSpacing) * index}
                y={barHeight - (barHeight / classifications.length) * (index + 1)}
                width={barWidth}
                height={(barHeight / classifications.length) * (index + 1)}
                fill={barColors[index]}
                rx={10}
                ry={10}
              />
              <SvgText
                x={centerOffset + (barWidth + barSpacing) * index + barWidth / 2}
                y={barHeight + 30}
                fontSize="16"
                fill="#333"
                textAnchor="middle"
              >
                {label}
              </SvgText>
            </React.Fragment>
          ))}
        </Svg>
        {/* Seta */}
        <Svg style={styles.arrowSvg} height={70} width={screenWidth}>
          <Path
            d={`M${arrowX - 15},10 L${arrowX},40 L${arrowX + 15},10 L${arrowX},25 Z`}
            fill="#6200ee"
            stroke="#6200ee"
            strokeWidth="2"
          />
        </Svg>
      </View>
      <Text style={styles.classificacaoLabel}>{classificacaoLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
    color: "#555",
  },
  chartContainer: {
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 180, 
  },
  arrowSvg: {
    position: "absolute",
    bottom: barHeight + 80,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  classificacaoLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#6200ee",
    textAlign: "center",
  },
});

export default ResultScreen;