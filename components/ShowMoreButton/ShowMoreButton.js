//import liraries
import React, { useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component

const ShowMoreButton = ({ text, numberOfLines }) => {
  // state to show that  the FULL TEXT is required
  const [showFullText, setShowFullText] = useState(true);

  // // state of button to check if it being clicked
  const [showMoreButton, setShowMoreButton] = useState(false);
  const numOfLinesUpdated = useRef(false);

  const onTextLayout = useCallback((e) => {
    if (!numOfLinesUpdated.current) {
      const isTextLongerThan2Lines = e.nativeEvent.lines.length > numberOfLines;
      setShowMoreButton(isTextLongerThan2Lines);
      // becomes false if text not longer than 2 lines = which means it is already showing full text
      setShowFullText(!isTextLongerThan2Lines);
      numOfLinesUpdated.current = true;
    }
  }, []);

  const handleShowMoreBtn = () => {
    setShowFullText(!showFullText);
  };

  const showMoreButtonText = showFullText ? "Show Less" : "Show More";

  return (
    <View style={{ flex: 1 }}>
      <Text
        onTextLayout={onTextLayout}
        style={styles.text}
        ellipsizeMode="tail"
        numberOfLines={showFullText ? 0 : numberOfLines}
      >
        {text}
      </Text>
      {showMoreButton && (
        <TouchableOpacity onPress={handleShowMoreBtn}>
          <Text style={styles.btnTextStyle}>{showMoreButtonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: "white",
    fontSize: 18,
    textTransform: "capitalize",
    marginHorizontal: 5,
  },

  btnTextStyle: {
    color: "white",
    fontSize: 18,
    marginVertical: 12,
    color: "purple",
    fontWeight: "800",
  },
});

//make this component available to the app
export default ShowMoreButton;
