import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');

export const currentFont = { fontFamily: 'Avenir' }

const colours = {
  textPrimary: '#1D1B20',
  white: '#FFFFFF',
  red: '#EA4335',
  // Blues
  highlight: '#0B84FF',
  border: '#484DBE',
  // Purples
  primary: '#5A428F',
  secondary: '#FBF8FF',
  textSecondary: '#49454F',
  purple: '#720BC4',
  lightPurple: '#79747E',
  darkPurple: '#281554',
  midPurple: '#534072',
  filterBorder: '#79747E',
  labelColor: '#7E7093',
  tertiary: '#E6D7FA',
  // Greys
  lightIconGrey: '#BCBCBC',
  mutedGrey: '#888',
  borderGrey: '#EEE',
  grey: '#808080',
  lightGrey: '#CCCCCC',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colours.tertiary,
    paddingTop: 30
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.tertiary,
  },
  rectangle: {
    width: '90%',
    paddingVertical: 20,
    backgroundColor: colours.secondary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  logo: {
    width: 124,
    height: 59,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 15,
    alignSelf: 'center'
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    color: colours.textPrimary,
    marginBottom: 15,
    textAlign: 'center',
    ...currentFont,
  },
  supportingText: {
    paddingBottom: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: colours.textSecondary,
    marginBottom: 30,
    alignSelf: 'center',
    ...currentFont,
  },
  supportingTextHome: {
    paddingBottom: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: colours.textSecondary,
    alignSelf: 'center',
    ...currentFont,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
    position: 'relative',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: colours.lightGrey,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colours.white,
    paddingHorizontal: 40,
    fontSize: 16,
    color: colours.grey,
    ...currentFont,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  modalIcon: {
    color: colours.darkPurple,
    marginRight: 4,
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.primary,
    borderColor: colours.border,
    borderWidth: 1,
    borderRadius: 20,
    padding: 7,
    alignSelf: 'center'
  },
  buttonDietPref: {
    marginTop: 10,
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.primary,
    borderColor: colours.border,
    borderWidth: 1,
    borderRadius: 20,
    padding: 7,
    alignSelf: 'center'
  },
  label: {
    position: 'absolute',
    left: 30,
    backgroundColor: 'transparent',
    top: -18,
    fontSize: 12,
    color: colours.labelColor,
    fontWeight: '600',
    ...currentFont,
  },
  buttonText: {
    color: colours.white,
    fontSize: 16,
    fontWeight: 'bold',
    ...currentFont,
  },
  buttonTitle: {
    fontWeight: '600',
    fontSize: 14,
    ...currentFont,
  },
  registerText: {
    textDecorationLine: 'underline',
    color: colours.primary,
    ...currentFont,
  },
  signUpButton: {
    marginBottom: 15,
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.secondary,
    borderColor: colours.primary,
    borderWidth: 2,
    borderRadius: 20,
    padding: 7,
    alignSelf: 'center',
  },
  logoutButton: {
    minWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.secondary,
    borderColor: colours.primary,
    borderWidth: 2,
    borderRadius: 20,
    padding: 7,
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: colours.primary,
    fontSize: 16,
    fontWeight: 'bold',
    ...currentFont,
  },
  guestText: {
    paddingTop: 6,
    color: colours.purple,
    textAlign: 'center',
    ...currentFont,
  },
  finderCard: {
    width: width - 32,
    height: 200,
    backgroundColor: colours.secondary,
    padding: 12,
    borderRadius: 24,
    marginTop: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  dietaryPreferencesCard: {
    width: width - 32,
    height: 605,
    backgroundColor: colours.secondary,
    padding: 12,
    paddingHorizontal: 14,
    borderRadius: 24,
    marginTop: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  recentCard: {
    width: width - 32,
    height: 220,
    backgroundColor: colours.secondary,
    padding: 12,
    paddingHorizontal: 14,
    borderRadius: 24,
    marginTop: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  recommendationsCard: {
    width: width - 32,
    height: 265,
    backgroundColor: colours.secondary,
    padding: 12,
    paddingHorizontal: 14,
    borderRadius: 24,
    marginTop: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imageContainer: {
    marginRight: 10,
    backgroundColor: colours.white,
    borderRadius: 8,
    overflow: 'hidden',
    width: 120,
    height: 150,
  },
  homeImage: {
    width: '100%',
    height: 100,
  },
  recentLabel: {
    marginLeft: 5,
    marginTop: 5,
    fontWeight: '500',
    ...currentFont,
  },
  recentComment: {
    marginLeft: 5,
    fontSize: 12,
    opacity: 0.5,
    ...currentFont,
  },
  filledCircle: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 12.5, 
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: colours.white,
    backgroundColor: colours.highlight,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  homeMap: {
    minWidth: 300,
    width: '100%',
    height: '57%',
    borderRadius: 15
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  baseCard: {
    maxHeight: height-160,
    maxWidth: width+2,
    backgroundColor: colours.secondary,
    borderRadius: 24,
    marginTop: 5,
    elevation: 4,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  mapDisplayCard: {
    maxHeight: height-200,
    minWidth: width,
    backgroundColor: colours.secondary,
    borderRadius: 24,
    elevation: 4,
    paddingHorizontal: 0,
  },
  mapDisplay: {
    minWidth: width,
    width: '100%',
    height: height-317.5,
  },
  restaurantTextContainer: {
    justifyContent: 'space-around',
  },
  restaurantItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  bottomSheetImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 10,
  },
  formHeaderContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  formHeaderText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#281554',
    justifyContent: 'flex-start',
    ...currentFont,
  },
  formDescriptionText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#281554',
    justifyContent: 'flex-start',
    ...currentFont,
  },
  formDescriptionTextBold: {
    fontWeight: '500',
    fontSize: 16,
    color: '#281554',
    justifyContent: 'flex-start',
    ...currentFont,
  },
  restaurantDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  filterBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    minHeight: 30,
    paddingHorizontal: 10,
    maxWidth: width,
  },
  restaurantItem: { 
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colours.borderGrey,
  },
  typesBackground: {
    backgroundColor: colours.secondary,
    height: 28,
    paddingLeft: 4,
    paddingRight: 4,
    borderStyle: 'solid',
    borderColor: colours.lightPurple,
  },
  typesText: {
    color: colours.darkPurple,
    fontWeight: '500',
    fontSize: 11,
    letterSpacing: -0.4,
    ...currentFont,
  },
  filterCheck: {
    color: colours.midPurple,
    marginRight: 5,
  },
  filterBackground: {
    backgroundColor: colours.secondary,
    height: 22,
    paddingHorizontal: 4,
    borderStyle: 'solid',
    borderColor: colours.filterBorder,
  },
  filterText: {
    color: colours.darkPurple,
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'center',
    ...currentFont,
  },
  badgesCross: {
    color: colours.lightIconGrey,
    paddingLeft: 4,
    height: 12,
    width: 20,
  },
  card: {
    backgroundColor: colours.secondary,
    padding: 20,
    borderRadius: 20,
  },
  mapIcon: {
    color: colours.midPurple,
    paddingHorizontal: 8,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  filledStar: {
    marginRight: 4,
    color: '#FCBE09',
  },
  unfilledStar: {
    marginRight: 4,
    color: '#D3D3D3',
  },
  badgeScrollView: {
    flexDirection: 'row',
    gap: 4,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  markerIcon: {
    height: 32,
    width: 32,
  },
  innerIcon: {
    position: 'absolute',
  },
  innerCircle: {
    position: 'absolute', 
    borderRadius: 20, 
    width: 20,
    height: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -5 }]
  },
  noResultsText: { 
    textAlign: 'center', 
    color: colours.mutedGrey, 
    marginTop: 20,
    ...currentFont
  },
  restaurantItem: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: colours.borderGrey,
  },
  restaurantName: { 
    fontSize: 18,
    ...currentFont
  },
  pageContainer: {
    padding: 15,
    justifyContent: 'space-between', 
  },
  textDetail: {
      paddingBottom: 25,
      flexDirection: 'row',
      alignItems: 'center',
  },
  ratingsView: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  contactCard: {
      paddingTop: 20,
  },
  contactInformation: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
      paddingRight: 10,
  },
  body: {
      fontSize: 12,
  },
  galleryImageContainer: {
      marginRight: 10,
      backgroundColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
      width: 180,
      height: 180,
  },
  image: {
      width: '100%',
      height: '100%'
  },
  modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  fullImage: {
      width: '90%',
      height: '70%',
      resizeMode: 'contain',
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    paddingTop: 5,
    ...currentFont,
  },
  mealTitle: {
      fontSize: 18,
      ...currentFont,
  },
  mealFilterList: {
      flexDirection: 'row',
      paddingLeft: 25,
      paddingTop: 8,
  },
  ingredientsDropDownInteractable: {
      flexDirection: 'row',
      paddingLeft: 35,
      padding: 5,
      paddingBottom: 10,
      alignItems: 'center'
  }, 
  ingredientsText: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 5,
    ...currentFont,
  },
  viewIngredientsText: {
      color: '#A394B8',
      ...currentFont,
  },
  appliedFilters: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  clipboardLink: {
      flexDirection: 'row',
      padding: 20,
      paddingLeft: 25,
      paddingBottom: 10,
      alignItems: 'center',
  },
  menuListHeader: {
      flexDirection: 'row',
      paddingLeft: 15,
      paddingTop: 5,
      paddingBottom: 5,
      ...currentFont,
  },
  matchingMealsList: {
      backgroundColor: '#CFFFF150',
  },
  otherMealsList: {

  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 15,
  },
  user: {
    width: 95,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EEFF',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },
  userIcon: {
    color: '#65558F',
    marginBottom: 10,
  },
  userCount: {
    fontSize: 14,
    fontWeight: '600',
    color: colours.labelColor,
    textAlign: 'center', 
  },
  userText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E1C49',
    textAlign: 'center',
    ...currentFont,
  },
  switchLabel: {
    fontSize: 16,
    color: colours.textSecondary,
    right: 10,
    ...currentFont,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    borderColor: colours.grey,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginBottom: 15,
    left: 10
  },
  locationInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
  },
  locationIcon: {
    paddingRight: 10,
  },
  headline: {
    fontWeight: '600',
    fontSize: 16,
    color: colours.textPrimary,
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'left',
    width: '100%',
    left: 20,
    ...currentFont,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colours.grey,
    marginBottom: 10,
    marginBottom: 0,
    left: 4,
    width: '98.5%',
  },
  listItemText: {
    fontSize: 16,
    color: colours.textPrimary,
    left: 10,
    ...currentFont,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 15,
    left: 10
  },
  settingsInputContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  sliderContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  sliderText: {
    fontSize: 16,
    color: colours.textSecondary,
    marginBottom: 10,
    left: 15,
    ...currentFont,
  },
  slider: {
    width: '95%',
    height: 40,
    left: 10,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    ...currentFont,
  },
  mapModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF8FF',
    borderRadius: 20,
    width: '90%',
    padding: 0,
  },
  restaurantFormHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EAFF',
    width: '100%',
    padding: 20,
    gap: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flexRowGroup: {
    flexDirection: 'row',
    gap: 15,
  },
  iconsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    verticalAlign: 'top',
    height: '100%',
    gap: 8
  },
  verticalFlexFormGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    gap: 10,
  },
  flexFormGroup: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    gap: 10,
   },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.secondary,
    borderRadius: 30,
    width: '80%',
  },
  pageContainer: {
    backgroundColor: "#E6D7FA",
    flex: 1,
  },
  detailsContainer: {
      alignItems: 'center',
      backgroundColor: '#F5EEFF',
      paddingTop: 10,
      width: width,
      height: height,
      flex: 1,
  },
  tabContainer: {
      flex: 1,
      backgroundColor: '#FBF8FF',
      width: width - 32,
      padding: 2,
      paddingTop: 0,
      borderRadius: 24,
      marginTop: 5,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      marginBottom: 15,
  },
  noteTitle: {
    fontSize: 18,
    ...currentFont,
    fontWeight: '600'
  },
  noteFormHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EAFF',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  noteImageContainer: {
    flex: 1,
    marginRight: 10,
    backgroundColor: colours.white,
    borderRadius: 8,
    overflow: 'hidden',
    width: 110,
    height: 80,
  },
  noteDetailContainer: {
    flex: 3, 
    paddingLeft: 16
  },
  saveNoteButton: {
    marginBottom: 15,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.secondary,
    borderColor: colours.primary,
    borderWidth: 2,
    borderRadius: 20,
    padding: 7,
    alignSelf: 'center',
  },
  badgeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
},
});