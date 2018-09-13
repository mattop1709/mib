import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export const Card = ({ status, node, reference, processor, customer }) => {
  return (
    <View style={[s.bg_white, s.ph4, s.mh2, s.mt2, s.pv3, s.br2]}>
      <Text style={[s.orange, s.f5]}>{reference}</Text>
      <Text style={[s.orange, s.f5]}>{customer}</Text>
      <View style={[s.flx_row, s.jcsb, s.pt2]}>
        <Text style={[s.darkGrey]}>{status}</Text>
        <Text style={[s.darkGrey]}>by {processor}</Text>
      </View>
    </View>
  );
};
