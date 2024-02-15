import { Text, View } from "react-native";
import SVG, { Circle, CircleProps } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = "#ee0f55";

const AnimateCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({
  radius = 100,
  strokeWidth = 30,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const fill = useSharedValue(0);

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 1200 });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));

  const circleDefaultProps: CircleProps = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    strokeWidth: strokeWidth,
    stroke: color,
    strokeLinecap: "round",
    origin: [radius, radius],
    rotation: "-90",
  };

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: "center",
      }}
    >
      <SVG>
        {/* background */}
        <Circle {...circleDefaultProps} opacity={0.2} />
        {/* foreground */}
        <AnimateCircle
          animatedProps={animatedProps}
          {...circleDefaultProps}
          fill={"transparent"}
        />
      </SVG>
      <AntDesign
        name="arrowright"
        size={strokeWidth * 0.8}
        color="#000"
        style={{
          position: "absolute",
          top: strokeWidth * 0.1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default RingProgress;
