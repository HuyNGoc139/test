import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import HeaderComponent from '../Components/HeaderComponent';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const StreakScreen = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(moment().month()); 
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
const [currentDate, setCurrentDate] = useState(moment())
  const changeMonth = (index) => {
    const newMonth = moment().month(index).format('YYYY-MM');
    
    let newDate = moment(currentDate);
    if(index==11&&newDate.month() === 0){
    }
    setCurrentMonth(newMonth);
    setCurrentMonthIndex(index);
  };
  const getDisplayedMonths = () => {
    const previousMonthIndex =
      currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
    const nextMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
    return [
      months[previousMonthIndex],
      months[currentMonthIndex],
      months[nextMonthIndex],
    ];
  };
  // const markedDates = {
  //   '2024-10-21': {
  //     startingDay: true,
  //     color: '#50cebb',
  //     textColor: 'white',
  //     customStyles: {
  //       container: {
  //         borderRadius: 150,
  //         borderColor: 'white',
  //         borderWidth: 1,
  //         backgroundColor: 'rgba(255, 87, 137, 1)',
  //       },
  //     },
  //   },
  //   '2024-10-22': {
  //     // color: '#70d7c7',
  //     textColor: 'white',
  //     customStyles: {
  //       container: {
  //         backgroundColor: 'rgba(0, 0, 0, 0.2)',
  //         borderRadius:0,
  //         margin:0,
  //         padding: 0,
  //       },
  //     },
  //   },
  //   '2024-10-23': {
  //     color: '#70d7c7',
  //     textColor: 'white',
  //     customStyles: {
  //       container: {
  //         backgroundColor: 'rgba(0, 0, 0, 0.2)',
  //         borderRadius:0,
  //         margin:0,
  //         padding: 0,
  //       },
  //     },
  //   },
  //   '2024-10-24': {
  //     color: '#70d7c7',
  //     textColor: 'white',
  //     customStyles: {
  //       container: {
  //         backgroundColor: 'rgba(0, 0, 0, 0.2)',
  //         borderRadius:0,
  //         margin:0,
  //         padding: 0,
  //       },
  //     },
  //   },
  //   '2024-10-25': {
  //     endingDay: true,
  //     color: '#50cebb',
  //     textColor: 'white',
  //     customStyles: {
  //       container: {
  //         borderRadius: 150,
  //         borderColor: 'white',
  //         borderWidth: 1,
  //         backgroundColor: 'rgba(255, 87, 137, 1)',
  //       },
  //     },
  //   },
  // };
  const markedDates = {
    '2024-10-21': {
      startingDay: true,
      color: '#rgba(255, 87, 137, 1)',
      textColor: 'white',
    },
    '2024-10-22': {
      color: '#rgba(0, 0, 0, 0.2)',
      textColor: 'white',
    },
    '2024-10-23': {
      endingDay: true,
      color: '#rgba(255, 87, 137, 1)',
      textColor: 'white',
    },
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <HeaderComponent title="My streaks" />
        <View style={styles.streakContainer}>
          <Image
            style={{ marginRight: 16 }}
            source={require('../../assets/ic_aim1.png')}
          />
          <View>
            <Text style={styles.streakText}>Current streak: 1</Text>
            <Text style={styles.longestStreakText}>Longest streak: 2</Text>
          </View>
        </View>

        <View style={styles.calenderContainer}>
          <View style={styles.monthNavigation}>
            {getDisplayedMonths().map((month, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => changeMonth(months.indexOf(month))}
                style={styles.monthButton}
              >
                <Text
                  style={[styles.monthText, index === 1 && styles.activeMonth]}
                >
                  {month}
                </Text>
                {index === 1 ? (
                  <LinearGradient
                    colors={['rgba(255, 87, 137, 1)', 'rgba(255, 155, 156, 1)']}
                    style={styles.activeSeparator}
                  />
                ) : (
                  <View style={styles.inactiveSeparator} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <Calendar
            key={currentMonth} // Sử dụng key để buộc render lại khi currentMonth thay đổi
            current={currentMonth} 
            theme={{
              backgroundColor: 'transparent', 
              calendarBackground: 'transparent',
              textSectionTitleColor: 'rgba(255, 255, 255, 1)',
              selectedDayBackgroundColor : '#00adf5' , 
              todayTextColor: '#ff6347',
              dayTextColor: 'rgba(255, 255, 255, 1)',
              monthTextColor: 'white',
              arrowColor: 'white',
              'stylesheet.day.basic': {
                // Tùy chỉnh cho ngày bắt đầu
                startingDay: {
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderColor: 'white',
                  borderWidth: 1,
                },
                // Tùy chỉnh cho ngày kết thúc
                endingDay: {
                  borderRadius:170,
                  borderColor: 'white',
                  borderWidth: 1,
                },
              },
            }}
            markingType={'period'}
            markedDates={markedDates}
            monthFormat={'MMMM yyyy'}
            // hideExtraDays={true}
            hideArrows={true}
            renderHeader={() => null}
            firstDay={1}
            onMonthChange={(date) => {
              const newMonth = moment(date.dateString).format('YYYY-MM');
              setCurrentMonth(newMonth);
              setCurrentMonthIndex(moment(date.dateString).month());
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calenderContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  streakContainer: {
    backgroundColor: '#rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  streakText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
    fontWeight: '500',
  },
  longestStreakText: {
    color: '#rgba(130, 129, 135, 1)',
    fontSize: 13,
    marginTop: 5,
    fontWeight: '300',
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  monthButton: {
    alignItems: 'center',
    flex: 1,
  },
  monthText: {
    color: '#rgba(130, 129, 135, 1)',
    fontSize: 15,
    marginBottom: 20,
    fontWeight: '500',
  },
  activeMonth: {
    color: '#rgba(255, 255, 255, 1)',
  },
  activeSeparator: {
    height: 2,
    alignSelf: 'stretch',
  },
  inactiveSeparator: {
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'stretch',
  },
});

export default StreakScreen;
