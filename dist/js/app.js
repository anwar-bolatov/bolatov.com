$(document).ready(function(){$(".scroll-top").on("click",function(o){o.preventDefault();var t=$(this).data("scrollTo");$("html, body").animate({scrollTop:$(t).offset().top},650)})}),$(document).ready(function(){function o(){var o=e.height(),n=e.scrollTop(),i=n+o;$.each(t,function(){var o=$(this),t=o.outerHeight(),e=o.offset().top,l=e+t;l>=n&&e<=i&&o.addClass("in-view")})}var t=$(".animation-element"),e=$(window);e.on("scroll resize",o),e.trigger("scroll")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInRoaXMiLCJkYXRhIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImNoZWNrX2lmX2luX3ZpZXciLCJ3aW5kb3dfaGVpZ2h0IiwiJHdpbmRvdyIsImhlaWdodCIsIndpbmRvd190b3BfcG9zaXRpb24iLCJ3aW5kb3dfYm90dG9tX3Bvc2l0aW9uIiwiZWFjaCIsIiRhbmltYXRpb25fZWxlbWVudHMiLCIkZWxlbWVudCIsImVsZW1lbnRfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW50X3RvcF9wb3NpdGlvbiIsImVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uIiwiYWRkQ2xhc3MiLCJ3aW5kb3ciLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiQUFJQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUNqQkYsRUFBRSxlQUFlRyxHQUFHLFFBQVMsU0FBU0MsR0FDcENBLEVBQU1DLGdCQUNOLElBQUlDLEdBQVNOLEVBQUVPLE1BQU1DLEtBQUssV0FDMUJSLEdBQUUsY0FBY1MsU0FDZEMsVUFBV1YsRUFBRU0sR0FBUUssU0FBU0MsS0FDN0IsU0FHTlosRUFBRUMsVUFBVUMsTUFBTSxXQUtoQixRQUFTVyxLQUNQLEdBQUlDLEdBQWdCQyxFQUFRQyxTQUN4QkMsRUFBc0JGLEVBQVFMLFlBQzlCUSxFQUEwQkQsRUFBc0JILENBRXBEZCxHQUFFbUIsS0FBS0MsRUFBcUIsV0FDMUIsR0FBSUMsR0FBV3JCLEVBQUVPLE1BQ2JlLEVBQWlCRCxFQUFTRSxjQUMxQkMsRUFBdUJILEVBQVNWLFNBQVNDLElBQ3pDYSxFQUEyQkQsRUFBdUJGLENBR2pERyxJQUEyQlIsR0FFL0JPLEdBQXdCTixHQUV6QkcsRUFBU0ssU0FBUyxhQW5CdEIsR0FBSU4sR0FBc0JwQixFQUFFLHNCQUN4QmUsRUFBVWYsRUFBRTJCLE9BeUJoQlosR0FBUVosR0FBRyxnQkFBaUJVLEdBQzVCRSxFQUFRYSxRQUFRIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFNtb290aCBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxyXG4gKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLnNjcm9sbC10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdCAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3Njcm9sbFRvJyk7XHJcblx0ICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0ICAgIHNjcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcFxyXG5cdCAgfSwgNjUwKTtcclxuXHR9KTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0gJCgnLmFuaW1hdGlvbi1lbGVtZW50Jyk7XHJcbiAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrX2lmX2luX3ZpZXcoKSB7XHJcbiAgICB2YXIgd2luZG93X2hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcbiAgICB2YXIgd2luZG93X3RvcF9wb3NpdGlvbiA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICB2YXIgd2luZG93X2JvdHRvbV9wb3NpdGlvbiA9ICh3aW5kb3dfdG9wX3Bvc2l0aW9uICsgd2luZG93X2hlaWdodCk7XHJcbiAgIFxyXG4gICAgJC5lYWNoKCRhbmltYXRpb25fZWxlbWVudHMsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgZWxlbWVudF9oZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG4gICAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XHJcbiAgICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9IChlbGVtZW50X3RvcF9wb3NpdGlvbiArIGVsZW1lbnRfaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vY2hlY2sgdG8gc2VlIGlmIHRoaXMgY3VycmVudCBjb250YWluZXIgaXMgd2l0aGluIHZpZXdwb3J0XHJcbiAgICAgIGlmICgoZWxlbWVudF9ib3R0b21fcG9zaXRpb24gPj0gd2luZG93X3RvcF9wb3NpdGlvbikgJiZcclxuXHJcbiAgICAgIChlbGVtZW50X3RvcF9wb3NpdGlvbiA8PSB3aW5kb3dfYm90dG9tX3Bvc2l0aW9uKSkge1xyXG5cclxuICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ2luLXZpZXcnKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICR3aW5kb3cub24oJ3Njcm9sbCByZXNpemUnLCBjaGVja19pZl9pbl92aWV3KTtcclxuICAkd2luZG93LnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG5cclxufSk7Il19
