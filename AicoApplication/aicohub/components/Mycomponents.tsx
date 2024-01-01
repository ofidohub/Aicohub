import * as React from 'react';
import { Button, Menu, Divider, View, Provider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => {}} title="Page 1" />
          <Menu.Item onPress={() => {}} title="Page 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Page 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;