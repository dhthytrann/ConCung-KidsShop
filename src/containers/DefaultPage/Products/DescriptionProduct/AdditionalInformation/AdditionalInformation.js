import "../AdditionalInformation/AdditionalInformation.scss";

const AdditionalInformation = () => {
  return (
    <div className="additional-information">
      <table>
        <tbody>
          <tr>
            <th>Brands:</th>
            <td>SkillStar, SLS</td>
          </tr>
          <tr>
            <th>Color:</th>
            <td>Black, Blue, Brown, Green</td>
          </tr>
          <tr>
            <th>Size:</th>
            <td>Extra Large, Large, Medium, Small</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInformation;
