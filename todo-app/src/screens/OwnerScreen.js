import OwnerContainer from "../components/owners/OwnersContainer";

function OwnerScreen(props) {
  return (
    <OwnerContainer
      setOwner={props.setOwner}
      switchScreen={props.switchScreen}
    />
  );
}

export default OwnerScreen;
