import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6262',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  seta: {
    width: 36,
    height: 36,
    top: 40,
    left: 14,
  },
  backText: {
    color: '#FFF',
    fontSize: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 150, // Metade da largura ou altura para fazer o círculo
    backgroundColor: '#FFF',
  },
  greetingContainer: {
    borderTopWidth: 1, // Adicionando barra superior
    borderBottomWidth: 1, // Adicionando barra inferior
    borderColor: '#FFF', // Cor da barra (branco neste exemplo)
    paddingTop: 10, // Espaçamento acima da barra
    paddingBottom: 10, // Espaçamento abaixo da barra
  },
  greeting: {
    marginTop: 20,
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
  },
  favoritesTitle: {
    marginTop: 40,
    fontSize: 20,
    color: '#FFF',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#A4DCE6',
    borderRadius: 10,
  },
  favoriteImage: {
    width: 50,
    height: 50,
  },
  favoriteText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  optionsContainer: {
    marginTop: 40,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    height: 250
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 10,
  },
  lastOptionItem: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  optionIcon: {
    width: 50,
    height: 50,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
});
