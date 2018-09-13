import React from "react";
import { View, Text, Picker } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export function PickerArea({ zbc, test }) {
  return (
    <View style={[s.bg_white, s.pv3, s.aic, s.mh2, s.mt2, s.br2]}>
      <Text style={[s.orange, s.b]}>MONEY IN BANK</Text>
      <View style={[s.bg_darkGrey, s.br5, s.ph3, s.mt2]}>
        <Picker selectedValue={zbc} style={{ width: 170 }} onValueChange={test}>
          <Picker.Item label="All ZBCs" value={null} />
          <Picker.Item label="Selangor Utara 1" value="KEBAT" />
          <Picker.Item label="Selangor Utara 2" value="RAWANG" />
          <Picker.Item label="Selangor Tengah" value="SALBAN" />
          <Picker.Item label="Selangor Barat 1" value="KLANG" />
          <Picker.Item label="Selangor Barat 2" value="COBRA" />
          <Picker.Item label="Selangor Timur 1" value="GOMBAK" />
          <Picker.Item label="Selangor Timur 2" value="KERTAG" />
        </Picker>
      </View>
    </View>
  );
}

export function PickerStatus({ status, test }) {
  return (
    <View style={[s.bg_darkGrey, s.br5, s.ph3, s.mt2, s.aic, s.mh5]}>
      <Picker
        selectedValue={status}
        style={{ width: 200 }}
        onValueChange={test}
      >
        <Picker.Item label="Select Status" value={null} />
        <Picker.Item label="Servable" value="Servable" />
        <Picker.Item label="Not Found" value="Not Found" />
        <Picker.Item label="Port Full" value="Port Full" />
      </Picker>
    </View>
  );
}
