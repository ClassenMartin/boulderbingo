import React, {useState} from "react";

function Selector () {
    return(<></>
    //     <div className="border-black border-2 w-full flex gap-2 p-2">
    //     {/* COLOR Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>COLOR</b>
    //       </h3>
          
    //       <button className="btnnav btn-red" onClick={toggleExcludeColor}>
    //         {!preselect.excludeColor ? "Exclude COLOR" : "Include COLOR"}
    //       </button>
    //       {!preselect.excludeColor && (
    //         <>
    //           <button onClick={clearColorSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {COLORS.map((color, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.colorType === color ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{color.name}</h4>
    //               <button
    //                 onClick={() => setColorPreselect(color)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* MOVE Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>MOVE</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeMove}>
    //         {!preselect.excludeMove ? "Exclude MOVE" : "Include MOVE"}
    //       </button>
    //       {!preselect.excludeMove && (
    //         <>
    //           <button onClick={clearMoveSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {MOVES.map((move, index) => (
    //             <div
    //               key={index}
    //               className={preselect.moveType === move ? "bg-gray-500" : ""}
    //             >
    //               <h4>{move.name}</h4>
    //               <button
    //                 onClick={() => setMovePreselect(move)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* TERRAIN Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>TERRAIN</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeTerrain}>
    //         {!preselect.excludeTerrain
    //           ? "Exclude TERRAIN"
    //           : "Include TERRAIN"}
    //       </button>
    //       {!preselect.excludeTerrain && (
    //         <>
    //           <button
    //             onClick={clearTerrainSelect}
    //             className="btnnav btn-blue"
    //           >
    //             CLEAR THIS OPTION
    //           </button>
    //           {TERRAINS.map((terrain, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.terrainType === terrain ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{terrain.name}</h4>
    //               <button
    //                 onClick={() => setTerrainPreselect(terrain)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* HOLD Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>HOLD</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeHold}>
    //         {!preselect.excludeHold ? "Exclude HOLD" : "Include HOLD"}
    //       </button>
    //       {!preselect.excludeHold && (
    //         <>
    //           <button onClick={clearHoldSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {HOLDS.map((hold, index) => (
    //             <div
    //               key={index}
    //               className={preselect.holdType === hold ? "bg-gray-500" : ""}
    //             >
    //               <h4>{hold.name}</h4>
    //               <button
    //                 onClick={() => setHoldPreselect(hold)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* FEELING Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>FEELING</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeFeeling}>
    //         {!preselect.excludeFeeling
    //           ? "Exclude FEELING"
    //           : "Include FEELING"}
    //       </button>
    //       {!preselect.excludeFeeling && (
    //         <>
    //           <button
    //             onClick={clearFeelingSelect}
    //             className="btnnav btn-blue"
    //           >
    //             CLEAR THIS OPTION
    //           </button>
    //           {FEELINGS.map((feeling, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.feelingType === feeling ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{feeling.name}</h4>
    //               <button
    //                 onClick={() => setFeelingPreselect(feeling)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* START Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>START</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeStart}>
    //         {!preselect.excludeStart ? "Exclude START" : "Include START"}
    //       </button>
    //       {!preselect.excludeStart && (
    //         <>
    //           <button onClick={clearStartSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {STARTS.map((start, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.startType === start ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{start.name}</h4>
    //               <button
    //                 onClick={() => setStartPreselect(start)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* TOPIC Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>TOPIC</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeTopic}>
    //         {!preselect.excludeTopic ? "Exclude TOPIC" : "Include TOPIC"}
    //       </button>
    //       {!preselect.excludeTopic && (
    //         <>
    //           <button onClick={clearTopicSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {TOPICS.map((topic, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.topicType === topic ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{topic.name}</h4>
    //               <button
    //                 onClick={() => setTopicPreselect(topic)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* STYLE Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>STYLE</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeStyle}>
    //         {!preselect.excludeStyle ? "Exclude STYLE" : "Include STYLE"}
    //       </button>
    //       {!preselect.excludeStyle && (
    //         <>
    //           <button onClick={clearStyleSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {STYLES.map((style, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.styleType === style ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{style.name}</h4>
    //               <button
    //                 onClick={() => setStylePreselect(style)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>

    //     {/* AMOUNT Section */}
    //     <div className="text-center">
    //       <h3>
    //         <b>AMOUNT</b>
    //       </h3>
    //       <button className="btn btn-red" onClick={toggleExcludeAmount}>
    //         {!preselect.excludeAmount ? "Exclude AMOUNT" : "Include AMOUNT"}
    //       </button>
    //       {!preselect.excludeAmount && (
    //         <>
    //           <button onClick={clearAmountSelect} className="btnnav btn-blue">
    //             CLEAR THIS OPTION
    //           </button>
    //           {AMOUNTOFMOVES.map((amount, index) => (
    //             <div
    //               key={index}
    //               className={
    //                 preselect.amountType === amount ? "bg-gray-500" : ""
    //               }
    //             >
    //               <h4>{amount.name}</h4>
    //               <button
    //                 onClick={() => setAmountPreselect(amount)}
    //                 className="btnnav btn-blue w-full"
    //               >
    //                 Choose
    //               </button>
    //             </div>
    //           ))}
    //         </>
    //       )}
    //     </div>
    //   </div>
    )
}

export default Selector;