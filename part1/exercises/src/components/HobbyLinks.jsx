export default function HobbyLinks() {
    let hobbyLinks = ["https://www.youtube.com/@SoundTheoryAcademy", "https://music.ishkur.com/"];
    return (
    <div>
        <a href = {hobbyLinks[0]}>My Music Theory YouTube Page</a>
        <a href = {hobbyLinks[1]}>Electronic Music</a>
    </div>
    );
}