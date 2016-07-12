import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import CarouselIndicator from './CarouselIndicator';

import styles from './styles';

const { width } = Dimensions.get('window');

export default class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activePage: props.initialPage || 0,
      indicatorCurrent: props.initialPage || 0,
      indicatorCount: 0,
      startPosition: 0,
    };
  }

  componentWillMount() {
    this.calculateGap(this.props);
  }

  componentDidMount() {
    if (this.props.initialPage > 0) {
      this.goToPage(this.props.initialPage);
    }
  }

  componentWillReceiveProps(props) {
    this.calculateGap(props);
  }

  calculateGap(props) {
    /*
     ------------
    |      v--- page
    |-   ----   -|
    | | |    | | |
    | | |    | | |
    | | |    | | |
    |-   ----   -|
    |^-- sneak   |
    |         ^--- gap
     ------------
    */
    const { sneak, pageWidth } = props;
    if (pageWidth > width) {
      throw new Error('invalid pageWith');
    }
    const gap = (width - (2 * sneak) - pageWidth) / 2;
    this.setState({ gap: gap });
  }

  goToPage(position) {
    const { pageWidth } = this.props;
    const { gap } = this.state;
    const pagePosition = position * (pageWidth + gap);
    this.scrollView.scrollTo({ y: 0, x: pagePosition });
  }

  handleScrollEnd(e) {
    // console.log('+++++++ handle scroll end pageWidth: ', this.props.pageWidth);
    // console.log('+++++++ handle scroll end width: ', width);
    const pageWidth = (this.props.pageWidth) ? this.props.pageWidth : width - 100;

    const { gap } = this.state;
    // console.log('+++++++ handle scroll end gap: ', gap);

    const pageOffset = pageWidth + gap;
    // console.log('+++++++ handle scroll end pageOffset: ', pageOffset);
    // select page based on the position of the middle of the screen.

    const currentPosition = e.nativeEvent.contentOffset.x + (width/2);
    // console.log('+++++++ handle scroll end e.nativeEvent.contentOffset.x: ', e.nativeEvent.contentOffset.x);
    // console.log('+++++++ handle scroll end currentPosition: ', currentPosition);
    // var activePage = e.nativeEvent.contentOffset.x;// / this.props.width;

    const currentPage = ~~(currentPosition / pageOffset);
    // console.log('++++ handleScrollEnd currentPage: ', currentPage);
    // console.log('++++ handleScrollEnd (currentPosition / pageOffset): ', (currentPosition / pageOffset));
    // console.log('++++ handleScrollEnd this.props.children.length: ', this.props.children.length);
    if (((currentPosition / pageOffset) < (this.state.activePage + 0.6)) && this.state.activePage != 0) {
      // console.log('++++ left condition: ', this.state.activePage);
      this.scrollView.scrollTo({ y: 0, x: (this.state.activePage - 1) * pageOffset });
      this.setState({
        activePage: this.state.activePage - 1,
        indicatorCurrent: this.state.activePage - 1,
      });
    } else if (((currentPosition / pageOffset) > (this.state.activePage + 0.8)) && ((this.state.activePage + 1) != this.props.children.length)) {
      // console.log('++++ right condition: ', this.state.activePage);
      this.scrollView.scrollTo({ y: 0, x: (this.state.activePage + 1) * pageOffset });
      this.setState({
        activePage: this.state.activePage + 1,
        indicatorCurrent: this.state.activePage + 1,
      });
    } else {
      this.scrollView.scrollTo({ y: 0, x: this.state.activePage * pageOffset });
    }


    // console.log('++++ test onPageChange');

    if (this.props.onPageChange) {
      this.props.onPageChange(currentPage);
    }
  }

  render() {
    if (!this.props.children || !this.props.pageWidth) {
      return null;
    }

    const { sneak, pageWidth, pageHeight, withoutIndicator } = this.props;
    // const pageHeight = pageWidth * 1.4;
    const { gap } = this.state;
    const computedStyles = StyleSheet.create({
      scrollView: {
        paddingLeft: sneak + gap / 2,
        paddingRight: sneak + gap / 2,
        paddingTop: 0,
        paddingBottom: 25,
      },
      page: {
        width: pageWidth,
        justifyContent: 'center',
        marginLeft: gap / 2,
        marginRight: gap / 2,
      },
    });

    let pages = this.props.children.map((c, index) => {
      c.props.pageHeight = 100;
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => this.goToPage(index)}
        >
          <View
            style={[styles.page, computedStyles.page, this.props.pageStyle]}
          >
            {c}
          </View>
        </TouchableWithoutFeedback>
      );
    });


    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          bounces
          contentContainerStyle={[styles.container, computedStyles.scrollView]}
          decelerationRate={0.9}
          horizontal
          onScrollEndDrag={this.handleScrollEnd.bind(this)}
          ref={c => this.scrollView = c}
          showsHorizontalScrollIndicator={false}
        >
          {pages}
        </ScrollView>

        {!withoutIndicator &&
          <CarouselIndicator
            indicatorText="•"
            pages={this.props.children}
            indicatorCurrent={this.state.indicatorCurrent}
            {...this.props}
          />
        }
      </View>
    );
  }
}


Carousel.propTypes = {
  pageStyle: React.PropTypes.object,
  pageWidth: React.PropTypes.number,
  children: React.PropTypes.array,
  initialPage: React.PropTypes.number,
  onPageChange: React.PropTypes.func,
  sneak: React.PropTypes.number,
  withoutIndicator: React.PropTypes.bool,
};

Carousel.defaultProps = {
  initialPage: 0,
  pageStyle: null,
  pageWidth: width - 100,
  sneak: 20,
};
