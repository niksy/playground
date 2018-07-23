'use strict';

var writerOpts = {
	transform: function(commit) {
		if ( commit.gitTags ) {
			return;
		}
		commit.hash = commit.hash.slice(0, 7);
		return commit;
	},
	headerPartial: '## [{{version}}]({{@root.host}}/{{@root.owner}}/{{@root.repository}}/compare/{{previousTag}}...{{currentTag}}) - {{date}}\n'
};

module.exports = new Promise(( resolve ) => {
	resolve({
		writerOpts: writerOpts
	});
});
