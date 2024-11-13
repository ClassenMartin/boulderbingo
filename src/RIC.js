import React from "react";

function RIC() {
  return (
    <div className="w-full mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">
        Understanding the RIC Grading Scale for Bouldering
      </h1>

      {/* Explanation of RIC Scale */}
      <p className="text-lg text-gray-700 mb-6">
        The RIC scale for bouldering is a tool used to provide a more nuanced
        assessment of a climbing problem, addressing three key factors:{" "}
        <b>Risk</b>, <b>Intensity</b>, and <b>Complexity</b>. Each of these
        elements is rated on a scale from 1 to 5, and the final grade for a
        problem is determined by averaging these values.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Risk</h2>
        <p className="text-gray-700">
          Risk refers to the commitment and potential danger of the move. This
          is less about physical risk and more about the challenge of the
          movement itself, such as the possibility of falling during a dynamic
          move or failing to complete a challenging sequence. It helps to
          determine the exposure to falls or danger during certain sequences,
          especially when making risky moves in bouldering problems.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Intensity</h2>
        <p className="text-gray-700">
          Intensity measures the level of strength and effort required to
          complete the climb. This could involve significant physical exertion,
          such as pulling hard on holds, performing dynamic moves, or
          maintaining a strenuous position over time. A high intensity means
          that the climber will be pushed to their physical limits.
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Complexity</h2>
        <p className="text-gray-700">
          Complexity focuses on the difficulty of solving the movement problem,
          both in terms of physical movement and the mental strategy required.
          Complexity can be broken down further into micro (small technical
          details) and macro (overall sequence planning) complexity. A highly
          complex problem requires both precise technical execution and careful
          planning of the climbing sequence.
        </p>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Why the RIC Scale Matters
        </h2>
        <p className="text-gray-700">
          The scale is designed to ensure a more diverse climbing experience,
          helping setters create a balance of different challenges within a
          gym's bouldering problems. For example, not all problems at a given
          difficulty should rely solely on strength or only on delicate
          footwork—there needs to be variety in terms of risk, intensity, and
          complexity for a well-rounded climbing experience.
        </p>
      </div>

      {/* Example 1: 7A with RIC 5/5/5 */}
      <div className="flex gap-20 my-16">
        <div className=" w-6/12 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Example 1: 7A with RIC Score of 5/5/5
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Risk (5/5)</h3>
            <p className="text-gray-700">
              The 7A problem is extremely risky, with moves that involve
              significant exposure. For example, there may be a highball move
              where the climber risks falling from a significant height. A fall
              in these sections could lead to injury unless properly protected.
              The difficulty lies in the commitment to completing each move
              without hesitation, as there are few options for rest.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Intensity (5/5)
            </h3>
            <p className="text-gray-700">
              This problem requires maximum physical effort, testing the
              climber’s strength and endurance to the limit. The moves are
              demanding, involving powerful dynamic moves and lock-offs. The
              climber will need to exert immense force on holds, and might be
              required to maintain challenging positions for prolonged periods,
              leading to muscle fatigue.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Complexity (5/5)
            </h3>
            <p className="text-gray-700">
              The complexity of this problem is also extremely high, requiring
              both mental and physical precision. Climbers need to figure out an
              intricate sequence of moves, utilizing technical footwork and body
              positioning. The overall plan for each move must be carefully
              executed, requiring a combination of macro complexity (the
              sequence of moves) and micro complexity (fine motor movements such
              as precise finger grips).
            </p>
          </div>
        </div>

        {/* Example 2: 7A with RIC 1/1/1 */}
        <div className=" w-6/12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Example 2: 7A with RIC Score of 1/1/1
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Risk (1/5)</h3>
            <p className="text-gray-700">
              The 7A problem with a RIC score of 1/1/1 is relatively low in
              risk. There is minimal potential for falling, and the moves don’t
              involve highball sections or significant danger. Climbers can
              safely fall or take breaks without much risk.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Intensity (1/5)
            </h3>
            <p className="text-gray-700">
              The intensity is quite low in this case. The problem requires only
              basic strength, with no strenuous or physically demanding moves.
              Climbers may find it more of a mental exercise than a physical
              one.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Complexity (1/5)
            </h3>
            <p className="text-gray-700">
              The complexity of this problem is also quite simple. The moves are
              basic, with no tricky sequences or requiring advanced footwork or
              planning. It’s more about simply moving from hold to hold in a
              straightforward manner.
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-700 font-semibold">
        <strong>Note:</strong> The RIC scale helps setters and climbers assess
        the variety of challenges posed by a problem. By balancing risk,
        intensity, and complexity, gym problems can provide a well-rounded
        climbing experience suitable for climbers of all levels.
      </p>
    </div>
  );
}

export default RIC;
