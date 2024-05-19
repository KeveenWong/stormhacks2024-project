import { promptGPT } from './openai-test'; 


async function generateYogaWorkout(params) {
  // Destructure parameters
  const {
    lengthOfSession,
    numberOfExercises,
    numberOfSetsPerExercise,
    mood,
    intensity,
    timeOfDay,
    preferredYogaStyle,
    healthConditionsOrInjuries,
    goals,
    otherKeywords
  } = params;

    // Read the sample JSON file
    const response = await fetch('/assets/json/sample.json');
    const jsonData = await response.json();

  // Generate the prompt based on user input
  const prompt = `We are creating an Cute AI companion app that helps users do yoga with a focus on physical and mental wellness.
  
  Please generate me a yoga workout with the following criteria in mind:

  Number of exercises: ${numberOfExercises}
  Mood: ${mood}
  Intensity: ${intensity}
  Time of day: ${timeOfDay}
  Preferred yoga style: ${preferredYogaStyle}
  Health conditions or injuries: ${healthConditionsOrInjuries}
  Goals: ${goals}
  Other keywords: ${otherKeywords}

  ONLY USE THE FOLLOWING EXERCISES IN THE WORKOUT:
  "archer
  banana
  big_toe
  bird_of_paradise
  boat
  boat_feet_behind_the_head
  both_feet_behind_the_head2
  bound_angle
  bow
  box
  bridge
  butterfly
  camel
  cat
  caterpillar
  chair
  child
  chin_stand
  cobra
  corpse
  cow
  cow_face
  crane
  crescent_lunge
  crescent_lunge_on_the_knee
  crescent_moon
  crooked_monkey
  crow
  deaf_man
  dolphin
  downward_facing_dog
  eagle
  easy
  eight_angle
  eight_point
  elbow_balance
  elephant_trunk
  embryo
  embryo_in_womb
  extended_puppy
  extended_side_angle
  extended_standing_hand_to_big_toe
  extended_supine_hand_to_big_toe
  fire_log
  firefly
  fish
  floating_stick
  flying_lizard
  flying_man
  flying_pigeon
  foot_behind_the_head1
  foot_behind_the_head2
  forearm_balance
  frog
  front_splits
  garland
  gate
  goddess
  gorilla
  grasshopper
  half_bow
  half_box
  half_moon
  half_pigeon
  handstand
  happy_baby
  head_to_knee1
  head_to_knee2
  head_to_knee3
  heron
  himalayan_duck
  horse
  humble_flamingo
  inverted_staff
  little_thunderbolt
  lizard
  locust1
  locust2
  locust3
  lord_of_the_fishes
  lotus
  low_push_up
  lunge
  moon_bird
  mountain
  noose
  peacock
  pendant
  pigeon
  plank
  plow
  pyramid
  rabbit
  rag_doll
  resolved_seated_hand_to_big_toe
  reverse_corpse
  revolved_bird_of_paradise
  rovolved_flying_man
  revolved_half_moon
  revolved_seated_hand_to_big_toe
  revolved_standing_hand_to_big_toe
  revolved_triangle
  rock_the_baby
  rooster
  sage_gheranda
  sage_marichi1
  sage_marichi2
  sage_marichi3
  sage_visvamitrascale
  scorpion
  seated_forward_bend1
  seated_forward_bend2
  seated_forward_bend3
  seated_forward_bend4
  seated_gate
  seated_half_bound_lotus_forward_bend
  seated_three_limbed_forward_bend
  shiva_squat
  shoelace
  shoulder_pressing
  shoulder_stand_with_lotus_legs
  side_lunge
  side_plank
  sleeping_yogi
  snake
  sphinx
  staff
  standing_bow
  standing_foot_behind_the_head
  standing_foot_behind_the_head_forward_bend
  standing_foot_to_head
  standing_forward_bend
  standing_half_bound_lotus_forward_bend
  _standing_hand_to_big_toe
  standing_splits
  star
  supine_angle
  supine_foot_to_head
  supine_hand_to_big_toe
  supine_spinal_twist
  supine_straddle
  supported-headstand
  supported_shoulder_stand
  thunderbolt
  tiger
  toe_stand
  tortoise
  tree
  triangle
  tripod_headstand
  upward_facing_dog
  upward_plank
  warrior1
  warrior2
  warrior3
  waterfall
  wheel
  wide_legged_forward_bend1
  wide_legged_forward_bend2
  wide_legged_forward_bend3
  wide_legged_forward_bend4
  wide_splits
  wild_thing
  wind_removing"

  Our mascot is a friendly female cat named Luna, who guides users through the yoga exercises with encouraging words and gentle reminders. 
  Luna is known for her soothing voice and calming presence, but adds a touch of playfulness and silly quips to the yoga routine instructions.
  She will narrate each instruction in the found in the JSON to the user, providing clear and concise guidance on each exercise. Do not include
  any values that determine the duration or repetitions of the exercise in the instructions, as Luna will guide the user through the timing.

  Order the exercises in a sensible manner and format this as JSON with fields being:
  "exercise": name of the exercise, 
  "intro": a brief introduction to the exercise, e.g. "Second up, we have the Warrior Pose!" (adapt based on what number exercise it is in the JSON, and add the speaking quirks of Luna),
  "instructions" (how to perform the exercise).

  The "intro" and "instructions" fields should be in Luna's voice, with a friendly, encouraging, and quirky tone and word choice. Keep in mind, the first and last exercises should have a special introduction and conclusion, respectively.
  Here is a sample JSON format to follow:
  ${JSON.stringify(jsonData)}`;

  return await promptGPT(prompt);
}

export { generateYogaWorkout };
