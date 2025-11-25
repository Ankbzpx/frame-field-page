import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <p>SIGGRAPH Asia 2025</p>
      <h1>
        Neural Octahedral Field: Octahedral Prior for Simultaneous Smoothing and
        Sharp Edge Regularization
      </h1>
      <a>Ruichen Zheng</a>
      <sup>1,2</sup>, <a href="http://ytrock.com">Tao Yu</a>
      <sup>1</sup>{" "}
      <a href="https://csse.szu.edu.cn/staff/ruizhenhu/index.htm">Ruizhen Hu</a>
      <sup>2</sup>
      <br />
      <sup>1</sup>Tsinghua University, <sup>2</sup>Shenzhen University
      <div class="vspacer">
        <span class="link-block">
          <a href="https://arxiv.org/abs/2408.00303">
            <FontAwesomeIcon icon={faFilePdf} />
            <span>Paper</span>
          </a>
        </span>
        <span style={{ width: "10px", display: "inline-block" }}></span>
        <span>
          <a href="https://github.com/Ankbzpx/frame-field">
            <FontAwesomeIcon icon={faFileCode} />
            <span>Code</span>
          </a>
        </span>
      </div>
      <div className="teaser">
        <div style={{ height: "50px" }}></div>
        <img src="./images/teaser.png" width="100%" height="100%" />
      </div>
      <h1 className="mid">Abstract</h1>
      <div className="abstract">
        <p>
          Neural implicit representation, the parameterization of a continuous
          distance function as a Multi-Layer Perceptron (MLP), has emerged as a
          promising lead in tackling surface reconstruction from unoriented
          point clouds. In the presence of noise, however, its lack of explicit
          neighborhood connectivity makes sharp edges identification
          particularly challenging, hence preventing the separation of smoothing
          and sharpening operations, as is achievable with its discrete
          counterparts. In this work, we propose to tackle this challenge with
          an auxiliary field, the <em>octahedral field</em>. We observe that
          both smoothness and sharp features in the distance field can be
          equivalently described by the smoothness in octahedral space.
          Therefore, by aligning and smoothing an octahedral field alongside the
          implicit geometry, our method behaves analogously to bilateral
          filtering, resulting in a smooth reconstruction while preserving sharp
          edges. Despite being operated purely pointwise, our method outperforms
          various traditional and neural implicit fitting approaches across
          extensive experiments, and is very competitive with methods that
          require normals and data priors. Code and data of our work are
          available at:{" "}
          <a href="https://github.com/Ankbzpx/frame-field">
            https://github.com/Ankbzpx/frame-field
          </a>
          .
        </p>
      </div>
      <h1 className="mid">Intuition</h1>
      <img src="./images/prior.gif" width="50%" height="100%" />
      <img src="./images/cases.png" width="100%" height="100%" />
      <h1 className="mid">Results</h1>
      <img src="./images/results.gif" width="80%" height="100%" />
    </>
  );
}

export default App;
