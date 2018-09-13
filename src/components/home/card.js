import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export const Card = ({ status, node, reference, processor, customer }) => {
  return (
    <View style={[s.bg_peach, s.ph4, s.mh3, s.mb2, s.pv3, s.br2]}>
      <Text style={[s.blue, s.f5]}>{reference}</Text>
      <Text style={[s.blue, s.f5]}>{customer}</Text>
      <View style={[s.flx_row, s.jcsb, s.pt2]}>
        <Text>by {processor}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};
