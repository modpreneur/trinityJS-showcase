/**
 * Created by fisa on 12/10/15.
 */
import Controller from 'trinity/Controller';

export default class IndexController extends Controller {
    indexAction($scope){
        //Get request
        let request = this.request;
        document.getElementById('content').innerHTML = JSON.stringify(request);

        // $scope object is global object accessible almost everywhere
        // you can access those via console typing just App.$scope
        // Give it a try!
        $scope.foo = 'Hello ';
        $scope.bar = 'world!';

        let bundleText = document.getElementById('bundleText');
        if(window.uncomented){
            bundleText.innerHTML =
                "Congratulation! as you can see your application is loading faster" +
                "<br>This is because whole trinity framework is bundled inside one file - less requests => more speed" +
                "<br>Uncommented code defines what files are included inside trinity.bundle file." +
                "<br>However, writing it this way sucks. Look into <b>config.js</b> file, into bundles property." +
                "<br>You can see same bundle prepared, but its empty, copy content from <b>index.html</b> and comment" +
                "<br>back second script tag. Viola, it works just fine!" +
                "<br>For more information about bundling please visit following url about " +
                "<a href='https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md'>jspm</a>"
        } else {
            bundleText.innerHTML = "LOADED!\n " +
                "If you thing loading of app is too slow, let me introduce you bundling system..\n"
            + "Look into index.html file and uncomment two script tags"
        }
    }
}